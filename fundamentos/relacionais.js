console.log('01)', '1' == 1); //Compara se os valores são iguais
console.log('02)', '1' === 1); //Compara se valores e tipos são estritamente iguais
console.log('03)', '3' != 3); //Compara se valores são diferentes
console.log('04)', '3' !== 3); //Compara se valores e tipos são estritamente diferentes

console.log('05)', 3 < 2); //3 é menor que 2
console.log('06)', 3 > 2); //3 é maior que 2
console.log('07)', 3 <= 2); //3 é menor ou igual a 2
console.log('08)', 3 >= 2); //3 é maior ou igual a 2

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);


