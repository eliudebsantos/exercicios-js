function maquinaSaque(saque){
    let c100 = 0
    let c50 = 0
    let c10 = 0 
    let c5  = 0
    let c1 = 0
    let nota = calcular(saque)

    while (saque >= nota){
        switch (nota){
        case 100:
            c100++
            saque -= 100
            break
        case 50:
            c50++
            saque -= 50
            break
        case 10:
            c10++
            saque -= 10
            break
        case 5:
            c5++
            saque -= 5
            break
        case 1:
            c1++
            saque -= 1
            break
        }
        nota = calcular(saque)
    }

    let tela = telaMaquina(c100, c50, c10, c5, c1)

    
    return tela

}

function calcular(saque){
    if (saque >= 100){
        return 100
    } else if (saque >= 50){
        return 50
    } else if (saque >= 10){
        return 10
    } else if (saque >= 5){
        return 5
    } else if (saque >= 1){
        return 1
    }
}

function telaMaquina (c100, c50, c10, c5, c1) {
    if (c100 > 0){
        console.log(`${c100} notas de R$100,00`)
    }

    if (c50 > 0){
        console.log(`${c50} notas de R$50,00`)
    }

    if (c10 > 0){
        console.log(`${c10} notas de R$10,00`)
    }

    if (c5 > 0){
        console.log(`${c5} notas de R$5,00`)
    }
    
    if (c1 > 0){
        console.log(`${c1} notas de R$1,00`)
    }
}

maquinaSaque(1978)

