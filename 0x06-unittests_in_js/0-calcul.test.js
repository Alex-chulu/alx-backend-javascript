const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding a', () => {
        assert.equal(calculateNumber(15.77, 4), 18);
        assert.equal(calculateNumber(1.2, 0), 1);
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    it('rounding b', () => {
        assert.equal(calculateNumber(2, 15.78), 18);
        assert.equal(calculateNumber(0, 1.2), 1);
        assert.equal(calculateNumber(2, 3.5), 6);
    });

    it('suming a and b', () => {
        assert.equal(calculateNumber(14.77, 2.4), 19);
        assert.equal(calculateNumber(1.2, 0.2), 1);
        assert.equal(calculateNumber(3.5, 2.7), 7);
    });
})
