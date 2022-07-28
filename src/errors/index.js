class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class BadRequestError extends Error {
  constructor(message, errors) {
    super(message);
    this.name = "BadRequestError";
    this.stack = errors;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

module.exports = {
  BadRequestError,
  NotFoundError
};
