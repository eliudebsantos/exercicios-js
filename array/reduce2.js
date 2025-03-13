const alunos = [
    {nome: 'João', notas: 7.3, bolsista: false},
    {nome: 'Maria', notas: 9.2, bolsista: true},
    {nome: 'Zé', notas: 9.8, bolsista: false},
    {nome: 'Ana', notas: 8.7, bolsista: true},
]

//Desafio 1: todos os alunos são bolsista?

const todosBolsistas = function (resultados, bolsista) {
    return resultados && bolsista
}
console.log(alunos.map(e => e.bolsista).reduce(todosBolsistas()))

//Desafio 2: Algum aluno é bolsista

/*console.log(alunos.map(function (e){
    const teste = [e.nome, e.bolsista]
    return teste
}).reduce(function(c){
    const teste2 = []
    if(c){
        teste2.push[c]
    }
    return teste2
}))

/*const teste = alunos.map(e => e.nome, e.bolsista).reduce(function (acumulador, atual){
    if (acumulador){

    }
})

console.log(teste)*/


/*const bolsist = alunos.map(e => e.bolsista)

const teste = bolsist.reduce(function(acu, atu) {
    if(acu){
        return 'Todos são bolsistas'
    } else {
        return `${acu} não é bolsista`
    }
})

console.log(teste)*/