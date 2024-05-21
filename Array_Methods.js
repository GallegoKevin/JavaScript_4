//ARRAY METHODS; 


//Lista de películas con sus géneros


const movies = [
    {
        id: 'movie-1',
        title: 'Inception',
        genres: ['Action', 'Sci-Fi', 'Thriller'],
    },
    {
        id: 'movie-2',
        title: 'The Shawshank Redemption',
        genres: ['Drama', 'Crime'],
    },
    {
        id: 'movie-3',
        title: 'Forrest Gump',
        genres: ['Drama', 'Romance'],
    },
];


//1. FIND (Devuelve el primer elemento en un array que cumple con una condición especificada.)

//"BUSCAR LA PRIMERA PELICULA QUE INCLUYA EL GENERO ACTION" :
const actionMovie = movies.find((movie) => movie.genres.includes('Action'));
console.log(actionMovie);


//2. SOME: 

//Verifica si al menos un elemento en un array cumple con una condición especificada 
//si al menos uno de los elemento cumple con la condicion devuelve true, de lo contrario false.

// VERIFICA SI AL MENOS HAY UNA PELICULA QUE INCLUYA LA CADENA ROMANCE EN EL ARRAY "movies"
const hasRomanceMovie = movies.some((movie) => movie.genres.includes('Romance'));
console.log(hasRomanceMovie);


//3. EVERY:

//Verificar si todos los elementos en un array cumplen con una condición especificada.
//Devuelve true si todos los elementos cumplen la condicion ; de lo contrario, devuelve false.


//VERIFICAR SI TODAS LA PERLICULAS EN EL ARRAY "movies" INCLUYEN LA CADENA DRAMA.
const allDramas = movies.every((movie) => movie.genres.includes('Drama'));
console.log(allDramas);


//4. MAP: 

//Transforma cada elemento de un arreglo para crear un nuevo arreglo 
//con los resultados de aplicar una función a cada uno.


//CREA UN NUEVO ARRAY MOVIETITLES QUE CONTIENE SOLO LOS TÍTULOS DE LAS PELÍCULAS DEL ARRAY MOVIES.  
const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);


//5. FILTER:

//Crea un nuevo array que contiene solo los elementos del array original que cumplen con una condición especificada.


// CREA UN NUEVO ARRAY DRAMAMOVIES QUE CONTIENE SOLO LAS PELÍCULAS DEL ARRAY MOVIES
// QUE TIENEN LA CADENA 'DRAMA' EN SU ARREGLO DE GÉNEROS.

const dramaMovies = movies.filter((movie) => movie.genres.includes('Drama'));
console.log(dramaMovies);
