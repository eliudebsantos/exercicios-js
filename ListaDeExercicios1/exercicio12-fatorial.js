/*12) Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial (num) {
    let fatorial = num

    for (let i = (num - 1); i > 0; i--){
        fatorial *= i
    }

    console.log(`O fatorial de ${num} é ${fatorial}`)
}

fatorial(3)
fatorial(5)
fatorial(4)