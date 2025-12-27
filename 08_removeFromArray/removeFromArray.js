const removeFromArray = function(Array, ...filtro) {
    let NuevaArray = Array.filter(n => !filtro.includes(n));
    return NuevaArray;
};

// Do not edit below this line
module.exports = removeFromArray;
