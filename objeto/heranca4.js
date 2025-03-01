function meuObjeto(){
    //função construtora, serve como se fosse o Object.prototype. entao todo objeto criado atraves dessa função construtora aponta para ela (meuObjeto.prototype) e não para Objevt.prototype
}

console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Eliude'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia meu nome é ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()
meuObjeto.prototype.falar()

const obj3 = {

}

obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

//Resumindo a loucura
//Professor disse que isso aqui em baixo é so por curiosidade
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)

console.log(meuObjeto.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)