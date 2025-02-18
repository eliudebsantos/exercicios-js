/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function media(vetor){
    let total = 0
    for (i = 0; i < vetor.length ;i++){
        total += vetor[i]
    }
    return total / vetor.length
}

let vetor = [100, 50, 25, 25, 50]

console.log(media(vetor))

