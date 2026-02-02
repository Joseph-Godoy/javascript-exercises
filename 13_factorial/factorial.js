const factorial = function (a) {
    let b = 1;
    if (!isNaN(a) && Number.isInteger(a) && a >= 0) {
        while (a > 1) {
            b = a * b
            a--
        }
        return b;
    }
    return undefined;
};

// Do not edit below this line
module.exports = factorial;