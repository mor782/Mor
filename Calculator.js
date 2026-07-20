const { trace } = require('node:console');
const { Calculator } = require('./calculatTest');


/*const calc1 = new Calculator();
const resAdd = calc1.add(10, 5);
const expAdd = 15;

if (resAdd === expAdd) {
    console.log(`✅ success ${resAdd}`);
} else {
    console.log(`❌ failure -${expAdd} but recive ${resAdd}`);
}


const calc2 = new Calculator();
const resSub = calc2.sub(10, 5); // שמי לב לשם הפונקציה המדויק אצלכם
const expSub = 5;

if (resSub === expSub) {
    console.log(`✅ success ${resSub}`);
} else {
    console.log(`❌ failure-${expSub} but recive ${resSub}`);
}


const calc3 = new Calculator();
const resMul = calc3.mul(4, 3);
const expMul = 5;

if (resMul === expMul) {
    console.log(`✅ success${resMul}`);
} else {
    console.log(`❌ failure-${expMul} but recive ${resMul}`);
}

const calc4 = new Calculator();
const resDiv = calc4.div(4, 2);
const expDiv = 2;

if (resDiv === expDiv) {
    console.log(`✅ success ${resDiv}`);
} else {
    console.log(`❌ failure -${expDiv} but recive ${resDiv}`);
}
*/

const calMetrics = {
    legalAction: 0,
    ilegalAction: 0
}

function logActionMetric(isSuccess) {

    if (isSuccess) {
        calMetrics.legalAction++;
        console.log("The action is ok")
    } else {
        calMetrics.ilegalAction++;
        console.log("Action is ilegal");

        if (calMetrics.ilegalAction >= 3) {
            console.log("\n We have rech 3 ilegal action");
            console.trace("Here is what happend: ");
        }
    }
}


const calc1 = new Calculator();
const resAdd = calc1.add(10, 5);
const expAdd = 15;
const isAddOk = resAdd === expAdd;
logActionMetric(isAddOk);


const calc2 = new Calculator();
const resSub = calc2.sub(10, 5);
const expSub = 5;
const isSubOk = resSub === expSub;
logActionMetric(isSubOk);


const calc3 = new Calculator();
const resMul = calc3.mul(4, 3); // 12
const expMul = 5;
const isMulOk = resMul === expMul;
logActionMetric(isMulOk);

const calc4 = new Calculator();
const resDiv = calc4.div(4, 2);
const expDiv = 2;
const isDivOk = resDiv === expDiv;
logActionMetric(isDivOk);


console.log("\n📊 סיכום מדדים נוכחי:");
console.log(JSON.stringify(calMetrics, null, 2));

const myData = {
    item: "laptop",
    price: 3500,
    inStock: true
};

const jasonText = JSON.stringify(myData);
//console.log(jasonText);

/*function functionA() {
    functionB();
}

function functionB() {
    console.trace("WE ARE HERE!");
}

functionA(); // מפעילים את הפונקציה הראשונה*/

const cart = [];

function addToCart(item, price) {
    // אם המחיר לא הגיוני (0), אנחנו רוצים לעשות Trace ולהבין מי אשם!
    if (price <= 0) {
        console.trace(`⚠️ באג! מישהו ניסה להוסיף פריט בחינם: ${JSON.stringify(item)}`);
        return;
    }
    cart.push({ item, price });
}

// פונקציות שמייצגות חלקים שונים באתר
function userClickedButton() {
    addToCart("חולצה מגניבה", 89); // תקין
}

function automaticDiscountSystem() {
    addToCart("גרביים", 0); // פה יש באג! מחיר 0
}

// נריץ את המערכת
userClickedButton();
automaticDiscountSystem();