/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function pares (){
    let numerosPares = []
    for (let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            numerosPares.push(i)
        }
    }
    console.log(numerosPares)
}

pares()