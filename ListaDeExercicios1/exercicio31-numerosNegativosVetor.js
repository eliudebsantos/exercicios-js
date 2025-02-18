/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function negativo(vetor){
    let numerosNegativos = 0
    for (let i = 0; i < vetor.length;i++){
        if (vetor[i] < 0){
            numerosNegativos++
        }
    }
    console.log(vetor)
    console.log("Numeros negativos encontrados: " + numerosNegativos)
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

negativo(vetor)