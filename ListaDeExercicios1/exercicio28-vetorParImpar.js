/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function parImpar(vetorTeste){
    let qtdImpar = 0
    let qtdPar = 0
    for (let i = 0; i < vetorTeste.length; i++){
        if (vetorTeste[i] % 2 == 0){
            qtdPar++
        } else {
            qtdImpar++
        }
    }
    console.log(vetorTeste)
    console.log(`Numeros pares: ${qtdPar}`)
    console.log(`Numeros Impares: ${qtdImpar}`)
}

let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
parImpar(teste)