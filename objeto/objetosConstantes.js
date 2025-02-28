// pessoa =>  123 => {...}
const pessoa = {
    nome: 'João'
}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa => 456 => {...}
//pessoa = {nome: "ana"}

Object.freeze(pessoa)//torna o objeto imutavel

pessoa.nome = "Eliude"
pessoa.end = "Rua abc"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({
    nome: "Linda"
})
pessoaConstante.nome = "!"
console.log(pessoaConstante)