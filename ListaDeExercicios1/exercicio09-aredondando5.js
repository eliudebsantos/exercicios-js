/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

/*function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
               84    + (5 - 4)
               85
               38  + (5- 3)
               40
    } else {
        return nota - (nota % 5)
                82 - 2
                81 - 1
                80 - 0


    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)*/

/*function teste (nota) {
    let corrigida = arredondarNota(nota)
    return corrigida >= 40 ? `Aprovado com nota ${corrigida}` : `Reprovado com nota ${corrigida}`
}

function arredondarNota(nota) {
    if (nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota - (nota % 5)
    }

}

console.log(teste(52))
console.log(teste(38))
console.log(teste(37))
console.log(teste(83))
console.log(teste(61))*/

function teste (num) {
    let convertido = converterNumero(num)

    if (convertido < 40) {
        console.log(`Reprovado com a nota ${convertido}`)
    } else {
        console.log(`Aprovado com a nota ${convertido}`)
    }
}

function converterNumero (num) {
    if (num % 5 > 2) {
        return num + (5 - (num % 5))
    } else {
        return num - (num % 5)
    }
}

teste(37)
teste(38)
teste(39)
teste(36)
teste(35)
