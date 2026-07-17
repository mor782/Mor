function countLetters(str, target) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            count++;
        }
    }
    return count;
}

function countArr(arr) {
    if (arr.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(countArr([]));
console.log(countArr([1, 2, 3, 4]));

function arrNum() {
    return arr.length;
}

module.exports = {
    countLetters,
    countArr,
    arrNum
};