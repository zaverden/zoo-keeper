import { initErrors } from '@zu/core';

const codes = {
  fileIsMissing: '',
  invalidJsonContent: '',
  configIsMissing: ''
};

initErrors(codes, 'cfgn');

export default codes;
