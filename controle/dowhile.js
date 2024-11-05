function aleatorio(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let num = 0;

do {
    num = aleatorio(-1, 10);
    console.log('Numero: ' + num);
} while(num != -1);