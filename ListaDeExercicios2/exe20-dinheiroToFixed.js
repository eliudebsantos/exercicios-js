/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário.
📕 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
Exemplos:
areaDoTriangulo(10, 15) // retornará "75,00"
areaDoTriangulo(7, 9) // retornará "31,50"
areaDoTriangulo(9.25, 13.1) // retornará "60.59"*/

function teste (base, altura){
    return ((base * altura) / 2).toFixed(2).toString().replace(".", ",")
}

console.log(teste(10, 15))
console.log(teste(7,9))
console.log(teste(9.25, 13.1))