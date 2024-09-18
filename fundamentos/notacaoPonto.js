console.log(Math.ceil(1.5));

const objeto1 = {};
objeto1.nome = 'Bola'; //Primeira forma de atribuir dinamicamente um atributo de objeto
objeto1['nome'] = 'Caneta';//Segunda forma de atribuir dinamicamente um atributo de objeto
console.log(objeto1.nome);

function obj(nome){
    this.nome = nome;
    this.exec = function() {
        return 'Executar...';
    }
}

const obj2 = new obj('cadeira');
const obj3 = new obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
console.log(obj3.exec());

//ESTANCIAR É COPIAR UM OBJETO E COLOCAR EM OUTRO LUGAR NA MEMORIA

