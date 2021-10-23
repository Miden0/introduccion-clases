// Importamos nuestro array
const movies = require('./movies')

// Ejecucion
// Cantidad de peliculas por año

years = new Map()

for (movie of movies){
    year_p = movie.Year

    if (years.has(year_p)){
        years.set(year_p, years.get(year_p) + 1)
    }
    else{
        years.set(year_p, 1)
    }
}
years.forEach((value, year) => {console.log(`La cantidad de peliculas para el año ${year} es ${value}`)})

// Titulos

let titulos = movies.map((movie) => {return movie.Title})

console.log(`\nTitulos de las peliculas: ${titulos}`)

// Cantidad de Imagenes

let n_imagenes = 0
movies.forEach((movie) => {n_imagenes += movie.Images.length})

console.log(`\nHay ${n_imagenes} imagenes en total`)

// Cantidad de ComingSoon

let n_comingsoon = 0
movies.forEach((movie) => {if (movie.ComingSoon) {n_comingsoon++}})

console.log(`\nHay ${n_comingsoon} peliculas que no salieron`)

// Porcentaje de peliculas que no salieron

console.log(`El porcentaje de peliculas que no salieron es ${n_comingsoon / movies.length * 100}%`)

