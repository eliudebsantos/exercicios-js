/*const prod1 = {
    nome: 'detergente',
    preco: 2.99
}

const prod2 = {
    nome: 'Omo',
    preco: 10.99
}*/

// Factory simples
function pessoa(){
    return {
        nome: "Ana",
        idade: 30
    }
}

console.log(pessoa())