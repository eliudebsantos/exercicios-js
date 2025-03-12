const aprovados = ['Ana', 'Bia', 'Zé', 'Caio']
//forma 1, exibindo valor e o indice
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}: ${nome} `)
})
//forma 2, exibindo so o valor
aprovados.forEach(nome => console.log(nome))
//forma 3, exibindo so o valor atraves de uma função alocada em uma variavel e colocada no forEach
const exibirAprovados = nome => console.log(nome)

aprovados.forEach(exibirAprovados)