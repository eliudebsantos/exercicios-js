// FUNÇÃO SEM RETORNO

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 5);
imprimirSoma(2);// vai somar 2 com UNDEFINED, vai voltar NaN
imprimirSoma(2, 10, 4, 5, 6, 7);//ele vai considerar somente os dois primeiros parametros e desconsiderar o resto
imprimirSoma();

// FUNÇÃO COM RETORNO
function soma(a, b=2){
    return a + b
}

soma(5)// vai voltar um NaN, por que usei returpra retornar um valor e não imprimir como fiz na primeira
console.log(soma(5));
console.log(soma(0, 5));