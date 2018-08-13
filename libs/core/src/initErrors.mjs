export default function(obj, prefix, length = 4) {
  let i = 0;
  for (let key of Object.keys(obj)) {
    const iSrt = `${i++}`;
    obj[key] = `${prefix}${iSrt.padStart(length, '0')}`
  }
  return obj;
}
