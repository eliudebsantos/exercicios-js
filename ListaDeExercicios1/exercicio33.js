/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

let numeros = [1, 2, 3, 4]
let nomes = ["Eliude", "Barbosa", "Santos", "Gato"]
let decimais = [1.3, 1.4, 1.5, 1.6]

//let vetor = [].concat(numeros, nomes, decimais)
let vetor = [...nomes, ...numeros, ...decimais]
console.log(vetor)