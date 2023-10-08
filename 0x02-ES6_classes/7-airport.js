export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(input) {
    this._name = input;
  }

  get code() {
    return this._code;
  }

  set code(input) {
    this._code = input;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
