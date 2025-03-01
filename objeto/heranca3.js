const pai = {
    nome: "João",
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',//o valor da chave nome
        writable: false,//um valor que não vai aceitar ser mudado
        enumerable: true//vai ser enumerado, pra poder usar object.key ou for in, coisas desse genero
    }
})

console.log(filha2.nome)
filha2.nome =  'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for ( let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
} //Essa é forma pra descobrir se um atributo veio por herança ou pertence a ele mesmo