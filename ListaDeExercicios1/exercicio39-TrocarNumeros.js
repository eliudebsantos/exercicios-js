/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

let vetor1 = [1,2,3,4,5]
let vetor2 = [6,7,8,9,10]

function trocarArray(vetor1, vetor2){
    for (i = 0; i < vetor1.length; i++){
        vetor1[i] = vetor2[i] + vetor1[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }

    console.log(vetor1)
    console.log(vetor2)
}

console.log(vetor1, vetor2)
console.log("Vetores trocados")

trocarArray(vetor1, vetor2)

//Nesse exercicio esqueci de colocar a palavra LENGTH... 