/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

let nomes = ["Eliude", "Barbosa", "Santos", "Programador"]
let numeros = [1,2,3,4]
let decimais = [1.2,1.5,2.6,3.4]

/*function formaUm (...args){
    let resultado = []
    for (i =0;i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}*/

/*function formaDois (nomes, numeros, decimais){
    let resultado = [].concat(nomes, numeros, decimais)
    return resultado
}*/

function formaTres (nomes, numeros, decimais){
    let resultado = [...nomes, ...numeros, ...decimais]
    return resultado
}
console.log(formaTres(nomes, numeros, decimais))