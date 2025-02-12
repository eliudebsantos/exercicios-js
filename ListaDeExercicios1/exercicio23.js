/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

/*function notas(nota1, nota2, nota3){
    let media = ((nota1 *0.4) + (nota2 * 0.3) + (nota3 * 0.3))
    
    if(media >= 5 && media <=10){
        console.log(`nota 1: ${nota1}, nota 2: ${nota2}, nota 3: ${nota3}`)
        console.log(`media: ${media}`)
        console.log("APROVADO")
    } else if (media < 5 && media >= 0){
        console.log(`nota 1: ${nota1}, nota 2: ${nota2}, nota 3: ${nota3}`)
        console.log(`media: ${media}`)
        console.log(`REPROVADO`)
    } else {
        console.log("[Media invalida")
    }

}

console.log(notas(5, 6, 10))
console.log(notas(5, 6, 100))*/

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)
    //talvez o sort percorra um array, entao ele testa o indice 0 com 1.... depois o 1 com 2...

    /*function notas (a,b){
        a<b?1:-1
    }*/

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
    
}

calcularNotaFinal(123, 2.8, 6, 3.5)