/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function calcularTempo (alturaCrianca1, taxaCrescimentoCrianca1, alturaCrianca2, taxaCrescimentoCrianca2 ){

    if (alturaCrianca1 == alturaCrianca2){
        if(taxaCrescimentoCrianca1 == taxaCrescimentoCrianca2){
            console.log("As duas criaças tem a mesma altura e taxa de crescimento")
        } else if (taxaCrescimentoCrianca1 > taxaCrescimentoCrianca2){
            console.log("A primeira criança vai passar a segunda em 1 ano")
        } else {
            console.log("A segunda criança vai passar a primeira em 1 ano")
        }
    } else if(alturaCrianca1 > alturaCrianca2){
        if(taxaCrescimentoCrianca1 >= taxaCrescimentoCrianca2){
            console.log("A segunda criança nunca vai passar a primeira")
        } else {
            console.log(`A segunda criança vai passar a primeira em ${anos(alturaCrianca1, taxaCrescimentoCrianca1, alturaCrianca2, taxaCrescimentoCrianca2)} ano(s)`)
        }
    } else {
        if(taxaCrescimentoCrianca1 <= taxaCrescimentoCrianca2){
            console.log("A primeira criança nunca vai passar a segunda")
        } else {
            console.log(`A primeira criança vai passar a segunda em ${anos(alturaCrianca2, taxaCrescimentoCrianca2, alturaCrianca1, taxaCrescimentoCrianca1)} ano(s)`)
        }
    }


}

function anos(maior, taxaMaior, menor, taxaMenor){
    let qtdAnos = 0
    while (menor < maior){
        menor += taxaMenor
        maior += taxaMaior
        qtdAnos++

    }
    return qtdAnos
}

calcularTempo(170, 2, 180, 2)