// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtoras
function produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco - (preco * desc)/100 
    }
}

const p1 = new produto ('Caneta', 10, 10)
const p2 = new produto ("notebook", 1000.45, 50)
console.log(p1.getPrecoDesconto().toFixed(2).toString().replace(".",","))
console.log(p2.getPrecoDesconto().toFixed(2).toString().replace(".",","))

// função factory

function criarFuncionario (nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return `R$${((salario / 30) * (30 - faltas)).toFixed(2).toString().replace(".", ",")}`
        }
    }
}

const f1 = criarFuncionario('Eliude', 1000.00, 2)
const f2 = criarFuncionario('Claudia', 2200.00, 0)
console.log(f1.getSalario())
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Clara'
console.log(filha.nome)

// Função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
