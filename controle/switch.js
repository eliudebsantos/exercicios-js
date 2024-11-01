const exibirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra!!');
        case 8: case 7:
            console.log('Aprovado!!');
            break
        case 6: case 5: case 4:
            console.log('Recuperação!!!');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!!!');
            break
        default:
            console.log('Nota invalida');
    }
}

exibirResultado(9);
exibirResultado(8.6);
exibirResultado(5.1);
exibirResultado(0);
exibirResultado(11);
exibirResultado(-1);