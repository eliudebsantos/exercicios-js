/*const alunos = [
    {nome: 'João', notas: 7.3, bolsista: false},
    {nome: 'Maria', notas: 9.2, bolsista: false},
    {nome: 'Zé', notas: 9.8, bolsista: false},
    {nome: 'Ana', notas: 8.7, bolsista: false},
]

const resultado = alunos.map(function(element){
    return element.notas
})

const teste = resultado.reduce(function(acumulador, atual){
    return acumulador + atual
})

console.log(teste)*/

const teste = [0,1,2,3,4]

const re = teste.reduce(function (acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(re)
