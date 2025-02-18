/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function maiorMenor (vetor){
    let maior = 0
    let menor = vetor[0]
    for (let i = 0; i <= vetor.length;i++){
        if (maior <= vetor[i]){
            maior = vetor[i]
        } else if (menor >= vetor[i] ){
            menor = vetor[i]
        }
    }
    return `Maior: ${maior}......Menor: ${menor}`
}
/*
function maiorMenor (vetor){
    let maior = 0
    let menor = 0
    let tamanho = 0
    vetor.sort((a,b) => b - a)
    maior = vetor[0]
    menor = vetor[vetor.length - 1]
    console.log(`Maior: ${maior}`)
    console.log(`Menor: ${menor}`)
}*/

let vetor = [10, 1, 111, 2, 5]

console.log(maiorMenor(vetor))
