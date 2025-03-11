class Lancamento {
    constructor (nome='Generico', valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor (mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(item => this.lancamentos.push(item))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(item => {
            valorConsolidado += item.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaLuz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario())