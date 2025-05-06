/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese
adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.

Exemplos:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3*/

function teste (array){
    let result = array.reduce((acumulador, valor) => acumulador += valor, 0)
    return result / array.length
}

console.log(teste([0, 10]))
console.log(teste([1, 2, 3, 4, 5]))

