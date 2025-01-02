function produto(nome, preco){
    return {
        nome,
        preco,
        desconto: preco - (preco * 50/100)
    }
}

console.log(produto('detergente', 3.00))
console.log(produto('Omo', 10))