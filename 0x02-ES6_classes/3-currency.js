export default class Currency {
    constructor(code = '', name = '') {
        this.code = code;
        this.name = name;
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Setter for code
    set code(newCode) {
        this._code = newCode;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    // Method to display full currency
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
