const alunos = [
    {nome: 'João', notas: 7.3, bolsista: true},
    {nome: 'Maria', notas: 9.2, bolsista: false},
    {nome: 'Zé', notas: 9.8, bolsista: false},
    {nome: 'Ana', notas: 8.7, bolsista: false},
]

console.log(alunos.map( e => e.bolsista).reduce((function (acu, atual) {
    return acu && atual ? 'Sim todos são bolsistas' : 'Nem todos são bolsistas'
})))

//Desafio 1: todos os alunos são bolsista?

/*const todosBolsistas = function (resultados, bolsista) {
    return resultados && bolsista
}
console.log(alunos.map(e => e.bolsista).reduce(todosBolsistas()))
*/

/*const teste1 = alunos.map(function (e){
    return e.bolsista
    
})
console.log(teste1)

const teste2 = teste1.reduce(function (acu, atual)  {
    return acu && atual
})

console.log(teste2?'sim':'nao')*/

/*const teste = alunos.reduce( (acumulador, atual) => {
    if (atual.bolsista == false){
        acumulador = false
    }

    return acumulador

}, true)

console.log(teste)*/

//Desafio 2: Algum aluno é bolsista

/*const teste = alunos.reduce(function (acumulador, atual) {
    if (atual.bolsista == true){
        acumulador = true
    }
    return `${acumulador == true ? 'Sim tem pelo menos um aluno bolsista' : 'Não tem nenhum aluno bolsista'}`
}, false)

console.log(teste)*/

console.log(alunos.map( e => e.bolsista).reduce((acu, atual) => acu || atual))