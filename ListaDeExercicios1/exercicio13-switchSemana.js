/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function semana (dia) {

            switch (dia) {
                case 1:
                case 8:
                case 15:
                case 22:
                case 29:
                    console.log("Domingo")
                    break
                case 2:
                case 9:
                case 16:
                case 23:
                case 30:
                    console.log("Segunda")
                    break
                case 3:
                case 10:
                case 17:
                case 24:
                    console.log("Terça")
                    break
                case 4:
                case 11:
                case 18:
                case 25:
                    console.log("Quarta")
                    break
                case 5:
                case 12:
                case 19:
                case 26:
                    console.log("Quinta")
                    break
                case 6:
                case 13:
                case 20:
                case 27:
                    console.log("Sexta")
                    break
                case 7:
                case 14:
                case 21:
                case 28:
                    console.log("Sabado")
                    break
                default:
                    console.log("Data Invalida")
            }
}

semana(1)
semana(2)
semana(18)
semana(12)
semana(20)
semana(7)
semana(-2)
semana(31)
/*
function semana (dia) {
    switch (dia){
        case 1:
            console.log("Fim de semana")
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Meio de semana")
            break
        case 7:
            console.log("Fim de semana")
            break
        default:
            console.log("Data invalida")
    }
}

semana(1)
semana(2)
semana(3)
semana(4)
semana(5)
semana(6)
semana(7)
semana('a')*/