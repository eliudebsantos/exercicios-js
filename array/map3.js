//IMPLEMENTANDO NOVO METODO NO PROTOTYPE DO ARRAY GERAL
Array.prototype.map2 = function(callback){
    const newArray = []
    for (i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"Nome": "Borracha", "preco": 3.45}',
    '{"Nome": "Caderno", "preco": 13.90}',
    '{"Nome": "kit de lapis", "preco": 41.22}',
    '{"Nome": "Caneta", "preco": 7.50}'
]

const converter = element => JSON.parse(element)
const dindin = element => `R$${parseFloat(element.preco).toFixed(2).replace('.',',')}`

const result = carrinho.map2(converter).map2(dindin)
console.log(result)