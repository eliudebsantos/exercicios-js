const valores = [7.7 , 8.9 , 6.3 , 9.2];
console.log(valores[0], valores[3]);

console.log(valores[4]);//vai mostrar undefined, por que não tem esse indice no array "valores"

console.log(!!valores[4]);

valores[4] = 10;
console.log(valores); //vai mostrar o idice 4 ja incluido
valores[6] = 111;
console.log(valores); //vai mostrar 1 itens vazios e o numero 111

console.log(`O Array valores vai até o indice ${valores.length - 1}`);

valores.push({id: 3} , false , null , "teste");
//A função push
console.log(valores);

console.log(valores.pop());//volta o ultimo item da array
//valores.pop(); //vai ser tirado dois valores com essa linha
console.log(valores);

delete valores[0]; //exclui o valor de um indice em uma array
console.log(valores)

console.log(typeof valores)


