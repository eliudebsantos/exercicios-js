/*Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15*/

function teste (array){
    let menor = array[0]
    for (i in array){
        if (array[i] < menor){
            menor = array[i]
        }
    }
    return menor
}

/*function teste (array){
    return array.reduce((acumulador, valor) => acumulador < valor ? acumulador : valor)
}*/

/*function teste (array){
    return Math.min(...array)
}*/

console.log(teste([10, 5, 35, 65]))
console.log(teste([5, -15, 50, 3]))