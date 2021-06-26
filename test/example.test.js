const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const calculator = require('./example');

describe('Example Unit testing ', () => {
    let total;

    beforeEach(async() => {
        total = 0;
        calculator.clear();
    });

    afterEach(async() => {
        console.log(`Total After Testing: ${total}`);
    });

    describe('calculator object', () => {
        let operand = 5;
        it('plus method adds value as expected', () => {
            total = calculator.plus(operand);
            expect(total).to.equal(operand);
        });
        it('minus method subtracts value as expected', () => {
            total = calculator.minus(operand);
            expect(total).to.equal(-1 * operand);
        });
        it('clear method resets the calculator total', () => {
            const value1 = 3,
                value2 = 4;
            total = calculator.plus(value1);
            total = calculator.plus(value2);
            expect(total).to.equal(value1 + value2);
            total = calculator.clear();
            expect(total).to.equal(0);
        })
    })
});