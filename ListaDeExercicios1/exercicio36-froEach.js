/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

let vetor = [1, 2, 3, 4, 5]

function multiplicarVetor (vetor, multiplicador){
    let resultado1 = []
    vetor.forEach(elemento => {
        resultado1.push(elemento * multiplicador)
    })
    return resultado1
}

function multiplicarVetor2 (vetor, multiplicador){
    let resultado2 = []
    if (multiplicador > 5){
        vetor.forEach(elemento => {
            resultado2.push(elemento * multiplicador)
        })
    }
    return resultado2
}

console.log(multiplicarVetor(vetor, 2))
console.log(multiplicarVetor2(vetor, 6))