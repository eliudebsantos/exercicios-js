/*A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos,
que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber 
-> se ele é multiplo de 4. 
-> Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.

Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
bissexto ou não.
Exemplos:
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400*/

function teste (ano){
    if(ano % 100 == 0){
        if ( ano % 400 == 0){
            return true
        } else {
            return false
        }
    } else if (ano % 4 == 0){
        return true
    } else {
        return false
    }
        
}
console.log(teste(2020))
console.log(teste(2100))

/*function teste (ano){
    const div4 = ano % 4 == 0
    const div100 = ano % 100 == 0
    const div400 = ano % 400 == 0

    return (div4 && !div100) || div400
}*/

console.log(teste(2020))
console.log(teste(2100))

/* 

TREINO BOOLEANO

function teste (numero){
    //const dois = numero % 3 == 0 || numero % 5 == 0
    //const um = numero % 3 == 0 && numero % 5 == 0

    //return dois && !um

    return (numero % 3 === 0 || numero % 5 === 0) && !(numero % 3 == 0 && numero % 5 === 0)

}

console.log(teste(3))
console.log(teste(5))
console.log(teste(15))
console.log(teste(7))*/