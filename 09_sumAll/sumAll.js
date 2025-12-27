const sumAll = function(a, b) {
    if (!(Number.isInteger(a) && Number.isInteger(b)) || (a < 0) || (b < 0)) return "ERROR";
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let n = max - min + 1;
    let sum = (n * (max + min)) / 2;
    /*
    if (b < a) {
        for (let i = b; i <= a; i++) sum += i;
    } else {
        for (let i = a; i <= b; i++) sum += i;
    }*/

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
