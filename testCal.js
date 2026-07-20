const test = require('node:test');
const assert = require('node:assert');

const { calaulatTest, Calculator } = require('./calculatTest');

test('check calculate add number', (t) => {
    const myCalc = new Calculator;
    const result = myCalc.add(2, 3);
    assert.strictEqual(result, 5);
    console.log("Recived operands A and B with operator[+]. The result is " % { result });

})
test('check calculator sub number', (t) => {
    const myCalc = new Calculator;
    const resultSub = myCalc.sub(4, 3);
    assert.strictEqual(resultSub, 1);
    console.log("Recived operands A and B with operator[-]. The result is " % { resultSub });

})

test('check calulator multiply number', (t) => {
    const myCalc = new Calculator;
    const resultMul = myCalc.mul(5, 5);
    assert.strictEqual(resultMul, 25);
    console.log("Recived operands A and B with operator[*]. The result is " % { resultMul });

})

test('check calculator divide number', (t) => {
    const myCalc = new Calculator;
    const resultDiv = myCalc.div(8, 4);
    assert.strictEqual(resultDiv, 2);
    console.log("Recived operands A and B with operator[-]. The result is " % { resultDiv });

})




