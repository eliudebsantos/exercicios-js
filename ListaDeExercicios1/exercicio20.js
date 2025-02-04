/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/


function saque (valor) {
    let c100 = 0
    let c50 = 0
    let c10 = 0
    let c5 = 0
    let c1 = 0
    let nota = calcular(valor)
    while (valor >= nota){
        switch(nota){
            case 100:
                valor = valor - 100
                c100++
                break
            case 50:
                valor = valor - 50
                c50++
                break
            case 10:
                valor -= 10
                c10++
                break
            case 5:
                valor -= 5
                c5++
            case 1:
                valor -= 1
                c1++
                break
        }

        nota = calcular(valor)
    }

    return elabora(c100, c50, c10, c5, c1)
}

function calcular (valor){
    if (valor >= 100){
        return 100
    } else if (valor >= 50){
        return 50
    } else if (valor >= 10){
        return 10
    } else if (valor >= 5){
        return 5
    } else if (valor >= 1){
        return 1
    }
}

function elabora(c100, c50, c10, c5, c1){
    let resultado = ''

    if (c100 > 0){
        resultado += `  ${c100} nota(s) de R$100.00`
    }
    if (c50 > 0){
        resultado += `  ${c50} nota(s) de R$50.00`
    }
    if (c10 > 0){
        resultado += `  ${c10} nota(s) de R$10.00`
    }
    if (c5 > 0){
        resultado += `  ${c5} nota(s) de R$5.00`
    }
    if (c1 > 0){
        resultado +=   `  ${c1} nota(s) de R$1.00`
    }

    return resultado
}

console.log(saque(968))