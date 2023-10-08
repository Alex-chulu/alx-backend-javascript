/* HolbertonClass */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  set size(input) {
    this._size = input;
  }

  get size() {
    return this._size;
  }

  set location(input) {
    this._location = input;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](dailer) {
    if (dailer === 'string') {
      return this.location;
    }
    if (dailer === 'number') {
      return this.size;
    }
    return null;
  }
}
