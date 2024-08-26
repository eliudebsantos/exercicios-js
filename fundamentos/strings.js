const escola = "Cod3r";

console.log(escola.charAt(3));//mostra o caracter no indice 3
console.log(escola.charAt(5));//mostra nada por que "COD3R" só vai até o indice 4
console.log(escola.charCodeAt(3));//pega o codigo do caractere no indice 3
console.log(escola.indexOf('r'));// mostra em que indice está o caracter "r"
console.log(escola.substring(3)); //mostra a string apartir do indice 3
console.log(escola.substring(0, 4));//mostra a string apartir do indice 0, e apartir do indice 4 não mostra mais

console.log("Escola ".concat(escola).concat("!")); //função concatenar
console.log("Escola: ".concat(escola.replace(3, 'e'))); // replace substitui um caracter de um indice por outro

console.log("Eliude,Barbosa,Santos".split(','));//transforma em uma array quebrando na virgula



