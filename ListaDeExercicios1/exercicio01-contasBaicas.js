//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

//Primeira Tentativa
function contas (x, y){
    const soma = x + y
    const subtracao = x - y
    const multiplicacao = x * y
    const divisao = x / y
    console.log(`${x} + ${y} = ${soma}`)
    console.log(`${x} - ${y} = ${subtracao}`)
    console.log(`${x} * ${y} = ${multiplicacao}`)
    console.log(`${x} / ${y} = ${divisao}`)
}

contas(10, 5)

//Resolução do Curso
function contasBasicas(x , y){
    console.log(x + y, x - y, x * y, x / y)
}

contasBasicas(10, 5)

//Tentando fazer função Arrow sozinho
const contasBasicasArrow = (x , y) => console.log(x + y, x - y, x * y, x / y)

contasBasicasArrow(10, 5)



