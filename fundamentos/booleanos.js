let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
//Exclamação é igual a NOT
console.log(!!isAtivo);//Vai mostrar TRUE
// "! é igual a NÃO", por padrão começa com TRUE, se a gente nega uma vez, ele vira FALSE, se duas vezes ele vira TRUE denovo
console.log(!isAtivo);//Vai mostrar FALSE

console.log("Os verdadeiros...");
console.log(!!5);
console.log(!!-1);
console.log(!!" ");//quando retorna uma string com espaço, volta true
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos....");
console.log(!!0);
console.log(!!'');//quando passado só uma string ele torna false
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!(null || 0 || NaN || '123'));

let nome = '';
console.log(nome || "Desconhecido");



