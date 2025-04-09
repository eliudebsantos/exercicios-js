/*Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro.
Exemplos:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}*/

function teste (obj, itemPraRemover){
    delete obj[itemPraRemover]
    return obj
}

/*function teste (obj, propriedade){
    //let novo = {...obj}
    let novo = Object.assign({}, obj)
    delete novo[propriedade]
    return novo

}*/

console.log(teste({a: 1, b: 2}, "a"))
console.log(teste({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))

