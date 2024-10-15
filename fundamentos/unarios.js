let n1 = 1;
let n2 = 2;

n1++;
console.log(n1);
--n1;
console.log(n1);

console.log(++n1 === n2--);//vai dar verdadeiro, por que o posfixado tem menos prooridade que a comparação e o prefixado
console.log(n1 === n2); //vai dar falso por que estou comparando depois de haver o decremento no N2

let base = 2;
base **= 3;// é o mesmo que dizer (BASE = BASE ** 3)
console.log(base);