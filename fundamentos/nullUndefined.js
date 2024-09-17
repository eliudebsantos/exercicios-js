let valor //não inicializado
console.log(valor); //undefined

valor = null;
console.log(valor); //null
//console.log(valor.tostring());

const produto = {};
console.log(produto.preco); //o atributo preço não foi inicializado
console.log(produto);

produto.preco = 3.50;
produto.validade = "16/09/2024";
console.log(produto);

delete produto.preco; //forma de deletar um atributo de um objeto
console.log(produto);

produto.validade = undefined;//EVITAR ATRIBUIR UNDEFINID A UMA VARIAVEL
console.log(!!produto.validade);
console.log(produto);

produto.validade = null; //sem valor
console.log(!!produto.validade);


