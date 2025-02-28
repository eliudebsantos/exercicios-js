const a = 1
const b = 2
const c = 3

const obj1 = {
    a: a,
    b: b,
    c: c
}

const obj2 = {a, b, c }

console.log(obj1, obj2)

const nomeAttr = "nota"
const valorAttr = 10

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {
    [nomeAttr]: valorAttr
}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //forma tradicional
    },

    funcao2(){
        //forma atualizada ecma2015
    }
}

console.log(obj5)

