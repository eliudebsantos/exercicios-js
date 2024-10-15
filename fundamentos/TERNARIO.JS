/*const resultado = (nota) => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.1));*/

function resultado (nota){
    return nota >= 7 ? 'Aprovado' : 'Reprovado';//Operadores Ternários
}

console.log(resultado(7.1));
console.log(resultado(6));

//===========================================================

/*function aleatorio (){
    return Math.random() * 10;
}

console.log(aleatorio());*/

const aleatorio = () => Math.random() * 100;

console.log(Math.ceil(aleatorio()));

