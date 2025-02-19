/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

function teste (inicio = 200, fim =100){
    let troca = 0
    if (inicio > fim) {
        /*inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim  */
        troca = inicio
        inicio = fim
        fim = troca    
        //metodos para trocar duas variaveis de lugar  
    }

    let result = []
    for (i = inicio; i < fim; i++){
        if (i % 2 == 1){
            result.push(i)
        }
    }
    return result
}

console.log(teste())

//Vacilei no começo por ter tratado uma variavel que recebeu um numero inteiro como uma array. talvez por estar a mais de 2 horas estudando arrays