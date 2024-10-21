const imprimirResultado = function (nota){
    if (nota >= 7){
        console.log('APROVADO');
    } else {
        console.log('REPROVADO');
    }
}

imprimirResultado(8);
imprimirResultado(5);
imprimirResultado('EPA');//Cuidado com linguagens fracamentes tipadas