const carrinho = [
    '{"Nome": "Borracha", "preco": 3.45}',
    '{"Nome": "Caderno", "preco": 13.90}',
    '{"Nome": "kit de lapis", "preco": 41.22}',
    '{"Nome": "Caneta", "preco": 7.50}'
]

//Retorne um array apenas com os preços

/*let teste = carrinho.map(function(element){
    let teste2 = JSON.parse(element)
    return `R$${teste2.preco}`
})

console.log(teste)*/

const converter = element => JSON.parse(element)
const dindin = element => `R$${parseFloat(element.preco).toFixed(2).replace('.',',')}`

const result = carrinho.map(converter).map(dindin)
console.log(result)

