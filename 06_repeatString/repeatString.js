const repeatString = function(palabra, cantidad) {
    let NuevaCadena = palabra;
    if (cantidad < 0){
        return 'ERROR';
    } else if (cantidad == 0) {
        return "";
    } else {
        for (let i = 0; i < cantidad - 1; i++){
            NuevaCadena = NuevaCadena + palabra;
        }
        return NuevaCadena;
    }
};

// Do not edit below this line
module.exports = repeatString;
