const leapYears = function(Año) {
    if (((Año % 4 == 0) && !(Año % 100 == 0)) || (Año % 400 == 0)) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
