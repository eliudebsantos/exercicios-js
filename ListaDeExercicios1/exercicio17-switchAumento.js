/*17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function job (plano, salario){
    switch (plano){
        case "A":
        case "a":
            console.log("Plano A escolhido")
            console.log(`Salario normal: R$${salario.toFixed(2).toString().replace(".", ",")}`)
            console.log(`Salario com aumento de 10%: R$${(salario + (salario * 10/100)).toFixed(2).toString().replace(".", ",")}`)
            break
        case "B":
        case "b":
            console.log("Plano B escolhido")
            console.log(`Salario normal: R$${salario.toFixed(2).toString().replace(".", ",")}`)
            console.log(`Salario com aumento de 15%: R$${(salario + (salario * 15/100)).toFixed(2).toString().replace(".", ",")}`)
            break
        case "C":
        case "c":
            console.log("Plano C escolhido")
            console.log(`Salario normal: R$${salario.toFixed(2).toString().replace(".", ",")}`)
            console.log(`Salario com aumento de 20%: R$${(salario * 1.2).toFixed(2).toString().replace(".", ",")}`)
            break
        default:
            console.log("Plano invalido")
        

    }
}

job("a", 1000)
job("b", 1000)
job('c', 1000)
job("d", 1000)
job("a", 2100)