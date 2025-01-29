/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.*/

function triplo (num) {
    let resto = (num % 3) == 0 ? "True" : "False"
    console.log(num % 3 + ' ' + resto)
}

triplo(3)
triplo(6)
triplo(9)
triplo(10)
triplo(11)

/*function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))*/
