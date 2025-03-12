const numeros = [1,2,3,4,5]

// for com propositos
// essa callback do map pode receber tres valores como parametros, 1°: elemento atual; 2°: indice; 3°: array completo
let resultado = numeros.map(function(num){
    return num * 2
})

console.log(resultado)

//metodo map não altera o array original, ele cria um novo array de mesmo tamanho do array original

const soma10 = num => num + 10
const tripla = num => num * 3
const paraDinheiro = num => `R$${parseFloat(num).toFixed(2).replace('.', ',')}`

/*console.log(numeros.map(soma10))
console.log(numeros.map(tripla))
console.log(numeros.map(paraDinheiro))*/

resultado = numeros.map(soma10).map(tripla).map(paraDinheiro)

console.log(resultado)