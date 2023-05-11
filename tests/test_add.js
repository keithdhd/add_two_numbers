const add = require('../add');
const assert = require('assert');

describe('add function', function () {
    it('should return the sum of two positive numbers', () => {
        assert.equal(add(3, 5), 8);
    });

    it('should return the sum of a positive and a negative number', () => {
        assert.equal(add(3, -5), -2);
    });

    it('should return the sum of two negative numbers', () => {
        assert.equal(add(-3, -5), -8);
    });

    it('should return the sum of two decimal numbers', () => {
        assert.equal(add(1.5, 2.5), 4);
    });

    it('should return error if inputs are not numbers', () => {
        assert.equal(add("hello", 5), "Error");
    });

});
