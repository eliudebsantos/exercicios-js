/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

/*function planoSaude (idade) {
    let plano = decidirPlano(idade)
    switch (plano) {
        case 0:
            console.log(`Essa idade não é valida`)
            break
        case 1:
            console.log(`Plano infantil: R$${(100 + 80).toFixed(2).toString().replace(".", ",")}`)
            break
        case 2:
            console.log(`Plano Jovem: R$${(100 + 50).toFixed(2).toString().replace(".", ",")}`)
            break
        case 3: 
            console.log(`Plano adulto: R$${(100 + 95).toFixed(2).toString().replace(".", ",")}`)
            break
        case 4:
            console.log(`Plano idoso: R$${(100 + 130).toFixed(2).toString().replace(".", ",")}`)
            break
    }
}

function decidirPlano(idade){
    if (idade < 0 && idade > 120){
        return 0
    } else if (idade < 10){
        return 1
    } else if (idade >= 10 && idade < 30){
        return 2
    } else if (idade >= 30 && idade < 60){
        return 3
    } else {
        return 4
    }
}

planoSaude(33)
planoSaude(5)
planoSaude(62)
planoSaude(18)*/

function planoSaude(idade){
    if (idade < 0 && idade > 120){
        console.log("Idade invalida")
    } else if (idade < 10){
        return 180
    } else if (idade >= 10 && idade < 30){
        return 150
    } else if (idade >= 30 && idade < 60){
        return 195
    } else {
        return 230
    }
}

console.log("Quantia a ser pago: " + planoSaude(33))
console.log("Quantia a ser pago: " + planoSaude(18))
console.log("Quantia a ser pago: " + planoSaude(3))
console.log("Quantia a ser pago: " + planoSaude(68))