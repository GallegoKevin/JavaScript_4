//foreach

//// Imprimir cada elemento en mayúsculas

const arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach((element) => {
    console.log(element.toUpperCase()); 
});


//map
const nombres = ["Juan", "María", "Carlos", "Ana"];

const longitudNombres = nombres.map((nombre) => {
    return nombre.length; // Nuevo array con la longitud de cada nombre
});

console.log(longitudNombres);
