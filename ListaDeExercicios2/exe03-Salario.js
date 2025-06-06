/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos. O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário
no mês.*/

//MINHA RESOLUÇÃO

function calcularSalario (horasTrabalhadas, porHora ){
    const salarioBruto = horasTrabalhadas * porHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salário igual a R$${salarioLiquido.toFixed(2).toString().replace(".", ",")}`
}

console.log(calcularSalario(180, 60))