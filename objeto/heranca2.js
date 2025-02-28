// Cadeia de prototipos (prototype chain)

Object.prototype.a0 = '0'
const avo = {a1: 'A'}
const pai = {__proto__: avo, a2: 'z', a3: 4}
const filho = {__proto__: pai, a3: 'B'}

console.log(filho.a3, filho.a2, filho.a1, filho.a0)

const carro = {
    veloAtual: 0,
    veloMax: 200,
    acelerarMais (delta){
        if (this.veloAtual + delta <= this.veloMax){
            this.veloAtual += delta
        } else {
            this.veloAtual = this.veloMax
        }
    },
    status(){
        return `${this.veloAtual}km/h de ${this.veloMax}`
    }
}

const ferrari ={
    modelo: 'f40',
    veloMax: 324 // shadowing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

