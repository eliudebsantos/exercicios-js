console.log(7 / 0); //Todo numero dividido por zero volta "infinity"
console.log("10" / 2); //É possivel fazer essa operação de string por number des de que a string seja um numero aceitavel
console.log("Show!" / 2); //NaN o resultado vai ser Not-a-Number
console.log(0.1 + 0.7); //com numeros flutantes os calculos não são precisos, era pra ser 0.8, mas sai 0.79999999...
//console.log(10.toString());  Não é possivel usar toString em um numero literal
console.log((10.123).toFixed(2));// mas consigo usar o toFixed para numeros literais usando parenteses
