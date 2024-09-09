const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 5000;
prod1['Desconto Legal'] = 0.40;//Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Televisão',
    preco: 4000.00,
    objeto: {
        teste: 'bom'
    }
}

console.log(prod2);