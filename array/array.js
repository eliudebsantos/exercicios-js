console.log(typeof Array, typeof new Array, typeof [])

//Uma das formas de criar um Array
//não é uma forma recomendada
let aprovados = new Array('Bia', 'Carlos', 'Chico')

console.log(aprovados)

//Notação literal 
//Forma recomendada
aprovados = ['Bia', 'Carlos', 'Chico']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Eliude'
aprovados.push('Isa')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Gata'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort()//altera o array, em ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
//splice => primeiro parametro: indice
//segundo parametro: quantidade de elementos que deseja excluir
//da pra adicionar elementos tambem
console.log(aprovados)