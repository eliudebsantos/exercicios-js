const numeros = [1,2,3,4]
const numeros2 = [2,3,4]
const nomes = ["ana", "amor", "casa"]

function somarArray (numeros) {
    return numeros.reduce((cont, item) => {
        return cont += item
    })
}

function multiArray(numeros2){
    return numeros2.reduce((cont, item) => {
        return cont *= item
    })
}

function contarLetras (nomes, char = 'a'){
    return nomes.reduce((cont, valor) => {
        return cont + valor.split("").filter(item => item === char).length
    }, 0)
}

console.log("A soma do array passado é: " + somarArray(numeros))
console.log("A multiplicação de todos item é: " + multiArray(numeros2))
console.log(contarLetras(nomes))