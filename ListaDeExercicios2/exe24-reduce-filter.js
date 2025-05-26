/*Desenvolva uma função que recebe um 
caractere e uma string como parâmetros 
e retorne a quantidade de vezes
que o caractere se repete na string. 
A função deverá ser case-sensitive, ou seja, 
irá diferenciar maiúsculas de
minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1*/

function contarCaractere(letra, frase){
    const teste = frase.split("")
    let cont = teste.filter(item => item === letra).length
    return cont
}

/*function contarCaractere (letra, frase){
    return frase.split("").reduce((contador, item) => {
        return item === letra ? contador + 1: contador
    }
    , 0)
}*/


/*function contarCaractere (letra, frase){
    let contador = 0    const teste = frase.split("")
    for (let i = 0; i < teste.length; i++){
        if (teste[i] === letra){
            contador++
        }
    }
    return contador
}*/

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))


