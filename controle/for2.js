const nota = [10, 8, 6, 3, 5];

for (i in nota){
    console.log(i, nota[i]);
}

const pessoa = {
    nome: 'Eliude',
    sobrenome: 'Barbosa',
    idade: 30,
    peso: 100.2
}

for (atri in pessoa){
    console.log(`${atri} = ${pessoa[atri]}`);
}