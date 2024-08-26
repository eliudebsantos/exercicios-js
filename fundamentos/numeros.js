const peso1 = 1.0; 
const peso2 = Number('2.2'); //Mostra duas formas de declarar um numero

console.log(peso1);
console.log(peso2);

console.log(Number.isInteger(peso1)); // mostra se é inteiro ou não
console.log(Number.isInteger(peso2));

const avaliacao1 = 5;
const avaliacao2 = 5;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //mostra so 2 numeros depois do ponto
console.log(media.toString(2)); //converte para numero binario
console.log(typeof media)

console.log(typeof Number); //Mostra que Numbem é uma função




