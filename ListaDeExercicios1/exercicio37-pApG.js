/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

//progressão aritmética => sequencias somadas => an = a1 + (n - 1) * r
//progressão geométrica => sequencias multiplicadas => an = a1 * q elevado a n-1

function pA(n, a1, r ){
    let pa = []
    for (i = 0; i < n; i++ ){
        pa[i] = a1 + ((i + 1) - 1) * r
    }
        return pa
}

function pg (n, a1, r){
    let pg = []
    for (i = 0; i < n; i++){
        pg[i] = a1 * r ** ((i + 1) - 1)
    }
    return pg
}

/*let n = 5
let a1 = 4
let r = 3*/



console.log(pA(5,4,3))
console.log(pg(4,4,3))