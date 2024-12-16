const notas = [1, 2, 3, 8, 9] //criei um ARRAY fixo

//SEM CALLBACK

let notasBaixas = [] // criei um array sem nada

for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//COM CALLBACK

let notasBaixas2 = notas.filter(function (a) {
    return a > 2
})

console.log(notasBaixas2)

const notasIgualATres = a => a == 3
const notasBaixas3 = notas.filter(notasIgualATres)

console.log(notasBaixas3)