//1) Criar uma função que retorna a string "Ola", concatenada com um argumento text (a ser passado para a função) e com o ponto de exclamação "!" no final

//RESOLUÇÃO
function comprimentar(nome){
    const saudacao = 'Olá'
    return [saudacao, nome].join(', ').concat('!')
}

console.log(comprimentar('Leonardo'))
//join -> acho que junta todos os valores de um array
//concat -> concatena?

//====================================
//MINHA RESOLUÇÃO
/*function comprimentar(nome){
    return "Olá " + nome + "!"
}

console.log(comprimentar("Leonardo"))
console.log(comprimentar("Maria"))*/