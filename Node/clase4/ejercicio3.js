let users = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },
]

let mayores = users.filter(function (user){
    return user.age >= 18
})
mayores = mayores.length

console.log(`La cantidad de usuarios mayores de edad es: ${mayores}`)
console.log(`La cantidad de usuarios menores de edad es: ${users.length - mayores}`)