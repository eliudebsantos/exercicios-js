const pessoa = {
    nome: 'Clara',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[0]}`)
}) 

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) 

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, //vai estar passivo a ser listada ou nao
    writable: false, //pode ser alterada ou não
    value: '03/10/1991'

})

pessoa.dataDeNascimento = '10/03/2000'
console.log(pessoa.dataDeNascimento)
console.log(pessoa)

// Object.assign (ECMAscript 2015)

const dest = {a: 1}
const o1 = {b:3}
const o2 = {c:5, a:4}
const obj = Object.assign(dest, o1, o2) // Concatena ontros Objetos a um destino
console.log(obj)

Object.freeze(obj)
obj.a = 1025
console.log(obj)