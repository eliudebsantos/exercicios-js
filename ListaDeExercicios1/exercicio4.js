/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function resto (dividendo, divisor){
    let result = dividendo / divisor
    let rest = dividendo % divisor
    console.log(`${dividendo} / ${divisor} = ${result.toFixed(2)}`)
    console.log(`${dividendo} % ${divisor} = ${rest}`)
}

resto(2, 2)
resto(10, 3)

const resto2 = (dividendo, divisor) => {
    console.log("Resultado: " + Math.floor(dividendo / divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}

resto2(10, 5)
resto2(15, 2)