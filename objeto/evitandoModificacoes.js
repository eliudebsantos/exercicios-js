// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.58,
    tag: 'Promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))
//não posso acrescentar nenhum atributo (chave), mas posso alterar valor e tambem deletar chave
produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
    nome: 'Eliude',
    idade: 34
}

Object.seal(pessoa)//selei o objeto pessoa
console.log('Selado: ', Object.isSealed(pessoa))
//Aqui eu ja não posso acrescentar nem deletar nenhuma chave/valor. Mas posso alterar se quiser o valor
pessoa.sobrenome = 'Barbosa'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze => seal + valores constantes

const carro = {
    modelo: 'v8',
    cor: 'branca',
}

Object.freeze(carro)
console.log('Frizado: ', Object.isFrozen(carro))
//Ele bloqueia tudo, não pode acrescentar, modificar e nem deletar nada de um objeto
carro.modelo = 'ladkaskjdbsjd'
delete carro.cor
carro.placa = 'ekd1234'
console.log(carro)

