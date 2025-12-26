const repeatString = function(palabra, cantidad) {
    let NuevaCadena = "";
    if (cantidad < 0) return 'ERROR';
    for (let i = 0; i < cantidad; i++){
    NuevaCadena += palabra;
    }
    return NuevaCadena;
};

// Do not edit below this line
module.exports = repeatString;
