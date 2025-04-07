/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é /o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]*/

/*function repetir (item, vezes){
    let result = []
    for (let i = 0; i < vezes;i++ ){
        result.push(item)
    }
    return result

}*/

function repetir (item, vezes){
    
    return Array(vezes).fill(item)
    
}

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))
