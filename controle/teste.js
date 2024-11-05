function aleatorio (min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1){
    opcao = aleatorio(-1, 101);
    console.log('Numero escolhido: ' + opcao);
}