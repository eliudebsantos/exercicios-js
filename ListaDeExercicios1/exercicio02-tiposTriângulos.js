/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

function triangulo (a, b , c) {
    if (a + b < c || a + c < b || b + c < a){
        console.log("ESSES VALORES NÃO FORMAM UM TRIÂNGULO")
    } else if (a == b && a == c) {
        console.log("É um triângulo Equilátero")
    } else if (a != b && a != c && c != b){
        console.log('É um triângulo Escaleno')
    } else {
        console.log('É um triângulo Isóscele')
    }
}

triangulo(2, 2, 5)
triangulo(21, 21, 21)
triangulo(21, 21, 24)
triangulo(20, 26, 30)