/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/
function expo (base, expoente) {
    //console.log(`${base} elevado a ${expoente} é ${base ** expoente}`)
    return base ** expoente
}

console.log(expo(2,2))
console.log(expo(5, 2))

const expo2 = (base, expoente) => base ** expoente

console.log(`2 elevado a 2 é ${expo(2, 2)}`)
console.log(expo2(8, 2))

function expo3 (base, expoente) {
    let resultado = Math.pow(base, expoente)
    return resultado
}

console.log(expo3(6, 2))