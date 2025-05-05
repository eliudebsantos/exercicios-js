/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]*/

//  MINHA TENTATIVA

function teste (array){
    let result = []
    for (let i in array){
        if ( i % 2 === 0){
            if (array[i] % 2 === 0){
                result.push(array[i])
            }
        }
    }
    return result
}

/* RESOLUÇÃO NUMERO 1

function teste (array){
    let result = []
    for (let i = 0; i <= array.length; i += 2){
        const numeroPar = array[i] % 2 === 0

        if (numeroPar){
            result.push(array[i])
        }
    }

    return result
}*/

/*  RESOLUÇÃO NUMERO 2

function teste (array){
    return array.filter((numeros, indices) => {
        const numeroPar = numeros % 2 === 0
        const indicePar = indices % 2 === 0

        return numeroPar && indicePar
    })
}*/

console.log(teste([1,2,3,4]))
console.log(teste([10,70,22,43]))

