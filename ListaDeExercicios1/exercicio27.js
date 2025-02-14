/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function teste (altura1, taxa1, altura2, taxa2 ) {
    if (altura1 == altura2){
        if (taxa1 > taxa2){
            return "A criança 1 utrapassara a criança 2 em 1 ano"
        } else if (taxa1 < taxa2){
            return "A criança 2 utrapassara a criança 1 em 1 ano"
        } else {
            return "A crianças tem a mesma altura e mesma taxa de crescimento"
        }
    } else {
        if (altura1 > altura2){
            if (taxa1 >= taxa2){
                return "A criança menor não ultrapassara a maior"
            } else {
                return `A criança menor ultrapassara a maior em ${calcular(altura2, taxa2, altura1, taxa1 )} anos`
            }
        } else {
            if (taxa1 <= taxa2){
                return "A criança menor não ultrapassara a maior"
            } else {
                return `A criança menor ultrapassara a maior em ${calcular(altura1, taxa1, altura2, taxa2 )} anos`
            }
        }
    }
}

function calcular(alturaMenor, taxaMenor, alturaMaior, taxaMaior ){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMaior += taxaMaior
        alturaMenor += taxaMenor
        qtdAnos++
    }
    return qtdAnos
}

console.log(teste(150, 2, 130, 4));