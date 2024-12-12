let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//Se só tem 1 parametro não precisa dos parenteses
//Se só é uma linha não precisa do return
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'oLA'
console.log(ola())