const test = require('node:test');
const assert = require('node:assert');

const { calaulatTest, Calculator } = require('./calculatTest');

test('check calculate add number', (t) => {
    const myCalc = new Calculator;
    const result = myCalc.add(2, 3);
    const resultSub = myCalc.sub(4, 3);
    const resultMul = myCalc.mul(5, 5);
    const resultDiv = myCalc.div(6, 2);


    assert.strictEqual(result, 5);
    assert.strictEqual(resultSub, 1);
    assert.strictEqual(resultMul, 25);
    assert.strictEqual(resultDiv, 3);
})