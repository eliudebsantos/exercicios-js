/*25) Escrever um programa para exibir os números de 1 até 50 na tela.*/ 

function contagem () {
    let teste = []
    for (let i = 0; i < 50; i++){
        teste.push(i + 1)
    }
    return teste
//teste.sort((a, b) => b - a)
}

console.log(contagem())