/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]*/

/*function teste (array){
    const primeiro = 0
    const ultimo = array.length - 1 
    const elemento1 = array[primeiro]
    const elementoFinal = array[ultimo]

    return [elemento1, elementoFinal]
}*/

function teste (array){
    const primeiro = array.shift()
    const ultimo = array.pop()

    return [primeiro, ultimo]
    //return [array[0], array[array.length - 1]]
}

console.log(teste([1,2,3,4,5]))