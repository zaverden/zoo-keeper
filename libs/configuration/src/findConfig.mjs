import util from 'util';
import fsNative from 'fs';
import path from 'path';
import { ZuError } from '@zu/core';
import Codes from './errorCodes';

const RC_FILE_NAME = '.zurc';

export default async function findConfig(fileName = RC_FILE_NAME, fs = fsNative) {
  const data = findConfigDeepAsync(path.resolve('.'), fileName, fs);
  if (data) {
    return data;
  }
  throw new ZuError(`File ${fileName} not found`, Codes.configIsMissing);
}

async function findConfigDeepAsync(dirPath, fileName, fs) {
  const filePath = path.join(dirPath, fileName);
  const data = await readJsonIfExistsAsync(filePath, fs);
  if (data) {
    return data;
  }
  const parentDirPath = path.resolve(dirPath, '..');
  if (parentDirPath === dirPath) {
    return null; // we are at the root
  }
  return await findConfigDeepAsync(parentDirPath, fileName, fs);
}

async function readJsonIfExistsAsync(filePath, fsOrig) {
  const fs = promisifyFs(fsOrig);
  const fileExists = await fs.exists(filePath);
  if (!fileExists) {
    throw new ZuError(`File ${filePath} does not exist`, Codes.fileIsMissing);
  }
  const content = await fs.readFile(filePath);
  try {
    const data = JSON.parse(content);
    return data;
  } catch (err) {
    throw new ZuError(`File ${filePath} contains invalid JSON`, Codes.invalidJsonContent, err);
  }
}

function promisifyFs(fs) {
  return {
    exists: util.promisify(fs.exists),
    readFile: util.promisify(fs.readFile)
  };
}
