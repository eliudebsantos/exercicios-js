//par Valor/Nome
const saudacao = 'Opa';//contexto lexico 1

function exec(){
    const saudacao = 'Legaaal';//contexto lexico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Eliude',
    idade: 32,
    peso: '99Kg',
    endereco: {
        logradouro: 'Av São João',
        numero: 1015,
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

