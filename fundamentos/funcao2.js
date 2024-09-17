// ARMAZENANDO UMA FUNÇÃO EM UMA VARIAVEL
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3);

//ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIAVEL
const soma = (a, b) => {
    return a + b;
}

console.log(soma(10, 20));

// RETORNO IMPLICITO
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 5));