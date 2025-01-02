// Function Declaration
console.log(soma(2,3))
//em uma Function declaration, posso chamar a unção antes da declaração, por que no JS ele pucha primeiro todas as FUNCTION DECLARATION e depois executa o codigo
function soma (x, y){
    return x + y
}

// Fuction expression

console.log(soma2(3,3))//nesse caso vai dar erro, por que no caso de uma fuction expression, a variavel não é chamada antes de iniciar o codigo
 const soma2 = function (x, y) {
    return x + y
 }

 // Named Fuction Expression
 const soma3 = function soma3(x, y){
    return x + y
 }