Array.prototype.filter2 = function (callback){
    let teste = []
    for (i = 0; i < this.length;i++){
        if (callback(this[i], i, this)){
            teste.push(this[i])
        }
    }
    return teste
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: true}
]

const caro = element => element.preco >= 500 
const fra = element => element.fragil 

console.log(produtos.filter2(caro).filter2(fra))