/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function exame (nome, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    
    notas.sort((a, b) => b - a)
    //numero negativo mantem
    //numero positivo troca
    //sort caminha todos os indices da array
    let media = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3))/10

    console.log(nome)
    console.log(`Primeira nota: ${nota1}`)
    console.log(`Segunda nota: ${nota2}`)
    console.log(`Terceira nota: ${nota3}`)
    console.log(`Media: ${media}`)
    console.log(`Situação: ${media >= 5 ? "APROVADO" : "REPROVADO"}`)
}

exame('Eliude', 10, 0, 0 )

