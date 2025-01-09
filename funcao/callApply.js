function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco //Isso aqui é como se fosse um metodo do objeto criado, se eu não quiser usar isso dentro do objeto eu preciso usar os METODOS CALL E APPLY
}

global.preco = 20
global.desc = 0.1

console.log(getPreco()) //pegou o preço e o desconto global
console.log(produto.getPreco())//ativou o metodo do objeto produto

//==================================================
//Daqui pra baixo ele mostra como chamar a função fora do objeto usando o metodo call e apply

const carro = { preco: 49990, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$ '))
console.log(getPreco.apply(global, [0.17, '$ ']))