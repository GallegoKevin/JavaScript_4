//For: Es utilizado para repetir un bloque de codigo varias veces.
//Se compone de tres partes: inicializacdor, limite o condición y incremento o decremento.


console.log ('Imprimir los números del 1 al 20 que son divisibles por 5');

for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
        console.log("Número divisible por 5:", i);
    }
}

//En este ejemplo, 
// Inicializador: let i = 1 
// Limte o condicional: i <= 20 
// Incremento o Decremento: i++


// .length en arrays nos devuelve la cantidad elementos

const nombres = ["Juan", "María", "Carlos", "Ana"];

for (let i = 0; i < nombres.length; i++) {
    console.log(`Nombre en la posición ${i}: ${nombres[i]}`);
}
