/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"*/

function simboloMais(num1){
    let result = ''
    for (let i = 0; i < num1; i++){
        result = result + '+'
    }
    return result
}

console.log(simboloMais(2))