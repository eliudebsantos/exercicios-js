//coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generico'
produto.preço = 220

console.log(produto.nome)
delete produto.preço
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 10000,
    proprietario: {
        nome: "raul",
        idade: 56,
        endereco: {
            logradouro: "abc",
            numero: 1015
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Eliude',
        idade: 34
    }],
    calcularValorDoSeguro: function(){
        console.log('100254')
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida são joão'

console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)