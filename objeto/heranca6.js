function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Primeira aula', 124)
const aula2 = new Aula('Segunda aula', 456)

console.log(aula1)
console.log(aula2)

//Simulando o new

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Terceira aula', 789)
const aula4 = novo(Aula, 'Quarta aula', 159)

console.log(aula3)
console.log(aula4)