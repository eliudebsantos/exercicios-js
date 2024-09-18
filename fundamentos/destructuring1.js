//Destructuring é uma função do ES2015

const pessoa = {
    nome: 'Eliude',
    idade: 32,
    peso: 98,
    endereco: {
        logradouro: 'Av São João',
        numero: 1015,
    }
}

const {nome , idade} = pessoa;//Isso é um Destructuring, serve pra tirar duas variaveis de um objeto e poder usar elas em outros lugares do codigo
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;//Isso é outra destructuring, mas dessa vez criei uma varivel diferente para adicionar os valores "[n] e [i]"
console.log(n, i);

const {sobrenome, palavra = true} = pessoa;//quando colocar indentificador que não tem, vai ser definido como Undefined
console.log(sobrenome, palavra);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);//Pra acessar um bloco dentro de outro bloco como no caso do endereço.... É COMO SE FOSSE UMA LEITURA DE TRAZ PRA FRENTE 

//É COMO EXTRAIR UMA VARIAVEL DE UM OBJETO PARA SER USADO EM OUTRO LUGAR DO CODIGO
