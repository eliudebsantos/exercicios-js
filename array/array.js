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
console.log(aprovados)