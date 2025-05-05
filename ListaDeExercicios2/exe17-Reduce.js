/*Escreva uma função que receba um array 
de números e retornará a soma de todos 
os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60*/

/*function teste (bloco){
    let result = 0
    for (let i of bloco){
        result += bloco[i]
    }
    return result
}*/

/*function teste (bloco){
    let soma = 0
    bloco.forEach(element => soma += element)
    return soma
}*/

function teste (bloco){
    return bloco.reduce((acumulador, atual) => acumulador + atual, 0)
}

console.log(teste([10, 10, 10]))
console.log(teste([15, 15, 15, 15]))