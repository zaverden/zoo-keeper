const ZU_ERROR_NAME = 'ZuError';

export default class ZuError extends Error {
  constructor(msg, code = null, innerError = null) {
    super(msg);
    // from here https://gist.github.com/justmoon/15511f92e5216fa2624b#gistcomment-1771287
    Error.captureStackTrace(this, this.constructor);
    this.code = code;
    this.innerError = innerError;
    this.name = ZU_ERROR_NAME;
  }

  toString() {
    let str = super.toString();
    if (this.innerError) {
      str += ` >> ${this.innerError.toString()}`;
    }
    return str;
  }
}
