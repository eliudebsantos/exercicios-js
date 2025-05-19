

function sortearNome(){
    const nomes = ['Eliude', 'Barbosa', 'dos', 'Santos', 'Aprendendo']
    const teste = Math.floor(Math.random() * nomes.length)
    return nomes[teste]

}

console.log(sortearNome())




