let contador = 1;

while(contador <= 10){
    console.log(`Contador: ${contador}`);
    contador++;
}

console.log('===============')

for (let c=1;c <= 10; c++){
    console.log(`Contador: ${c}`);
}

console.log('================');

const notas = [10, 5, 8, 6];
console.log(notas.length)

for (let i = 0; i < notas.length; i++){
    console.log(`Nota ${i+1}: ${notas[i]}`)
}