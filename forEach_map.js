//foreach

//// Imprimir cada elemento en mayúsculas

const arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach((element) => {
    console.log(element.toUpperCase());
});


//map

// Nuevo array con la longitud de cada nombre

const names = ["Juan", "María", "Carlos", "Ana"];

const lengthNames = names.map((name) => {
    return name.length;
});

console.log(lengthNames);


//Diferencia de foreach y map:
//forEach se usa para realizar una modificación en cada elemento de un array sin necesidad de crear un nuevo array,
//map se usa cuando se quiere transformar cada elemento del array y obtner un nuevo array con los resultados .

