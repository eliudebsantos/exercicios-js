/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function extenso (numero) {
    switch (numero) {
        case 0:
            return "ZERO"
            break
        case 1:
            return "UM"
            break
        case 2:
            return 'DOIS'
            break
        case 3:
            return "TRÊS"
            break
        case 4:
            return "QUATRO"
            break
        case 5:
            return "CINCO"
            break
        case 6:
            return "SEIS"
            break
        case 7:
            return "SETE"
            break
        case 8:
            return "OITO"
            break
        case 9:
            return "NOVE"
            break
        case 10:
            return "DEZ"
            break
        default:
            return "Numero invalido"
        
    }
}

console.log(extenso(11))
console.log(extenso(0))
console.log(extenso(1))
console.log(extenso(2))
console.log(extenso(3))
console.log(extenso(4))
console.log(extenso(5))
console.log(extenso(6))
console.log(extenso(7))
console.log(extenso(8))
console.log(extenso(9))
console.log(extenso(10))
