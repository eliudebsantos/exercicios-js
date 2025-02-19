/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

let notas = [3,5.5,8,10]

function conceito (notas){
    for (i = 0; i < notas.length;i++){
        console.log(i + 1 + "° nota: " + notas[i])
        if (notas[i] >= 0 && notas[i] <= 4.9){
            console.log("Conceito D")
        } else if (notas[i] >= 5 && notas[i] <= 6.9){
            console.log("Conceito C")
        } else if (notas[i] >= 7 && notas[i] <= 8.9){
            console.log("Conceito B")
        } else if (notas[i] >= 9 && notas[i] <= 10){
            console.log("Conceito A")
        } else {
            console.log("NOTA INVALIDA")
        }
    }
}

conceito(notas)