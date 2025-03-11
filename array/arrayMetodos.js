const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop()//remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um elemento no final 
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamitton')//adiciona um elemento no começo de uma array
console.log(pilotos)

//splices podeadicionar e remover elementos 

// adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)//cria um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)