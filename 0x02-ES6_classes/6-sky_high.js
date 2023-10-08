import Building from './5-building';
/* eslint-disable no-underscore-dangle */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }
/* set and get floors*/
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
