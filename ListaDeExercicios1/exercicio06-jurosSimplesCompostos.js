/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples (capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial + (capitalInicial * taxaJuros * tempo)
    return montante
}

const jurosCompostos = (capitalInicial, taxaJuros, tempo) => capitalInicial * (1 + taxaJuros) ** tempo

console.log(`R$${jurosSimples(100, 10/100, 2).toFixed(2).toString().replace(".", ",")}`)

console.log(`R$${jurosCompostos(100, 10/100, 2).toFixed(2).toString().replace('.', ',')}`)


