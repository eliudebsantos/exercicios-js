/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true*/

/*function estaEntre (min, max, valor, inclusivo = false){
   if (inclusivo){
        if (valor >= min && valor <= max){
            return true
        } else {
            return false
        }
   }
   else {
        if (valor > min && valor < max){
            return true
        } else {
            return false
        }
   }
}*/

function estaEntre (min, max, valor, incluso = false){
    return incluso ? valor >= min && valor <= max : valor > min && valor < max
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))

/*
function estaEntre(minimo, maximo, numero, inclusivo = false) {
if(inclusivo) return numero >= minimo && numero <= maximo
return numero > minimo && numero < maximo
}

function estaEntre(minimo, maximo, numero, inclusivo = false) {
return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
*/ 