/*08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). 

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/



/*let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))*/

/*let listaDePontos = "10 20 20 8 25 3 0 30 1"

function compara (listaDePontos) {
    let listaDePontosArray = listaDePontos.split(" ")
    let maior = listaDePontosArray[0]
    let menor = listaDePontosArray[0]
    let quebraRecordes = 0
    let posicaoPior = 1

    for (let i = 1; i < listaDePontosArray.lenght; i++){
        if (parseInt(listaDePontosArray[i]) > parseInt(maior)){
            maior = listaDePontosArray[i]
            quebraRecordes++
        } else if (parseInt(listaDePontosArray[i]) < parseInt(menor)){
            menor = listaDePontosArray[i]
            posicaoPior = i + 1

        }

    }

    return [quebraRecordes, posicaoPior]
}

console.log(compara(listaDePontos))*/

/*let stringPontuacoes = "10 20 20 8 25 3 0 30 1"

function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(" ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++ ){
        if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
            
    }

    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))*/
/*
let lista = "10 20 20 25 30 0 1"

// [3, 6]

function avalia (lista) {
    let pontos = lista.split(" ")
    let recorde = 0
    let pior = 1
    let maior = pontos[0]
    let menor = pontos[0]

    for (let i = 1; i < pontos.lenght; i++){
        if(parseInt(pontos[i]) > parseInt(maior)){
            maior = pontos[i]
            recorde = recorde + 1
        } else if (parseInt(pontos[i]) < parseInt(menor)){
            menor = pontos[i]
            pior = i + 1
        }
    }

    return [recorde, pior]
}

console.log(avalia(lista))

*/

let pontos = "10, 20, 25, 30, 35, 40, 0"

function teste (pontos) {
    let lista = pontos.split(", ")
    let maior = lista[0]
    let recorde = 0
    let menor = lista[0]
    let posicao = ''
    
    

    for (let i = 1; i < lista.length; i++) {
        if (parseInt(lista[i]) > parseInt(maior)){
            maior = lista[i]
            recorde = recorde + 1
        } else if (parseInt(lista[i]) < parseInt(menor)){
            menor = lista[i]
            posicao = i + 1
        }
    }
    return [`Numero de recordes: ${recorde}`, `Quando foi a menor pontuação: na ${posicao}o vez`]
}

console.log(teste(pontos))

//EU ERREI AS FUNÇÕES QUE FIZ POR CONTA DA PALAVRA RESERVADA LENGTH.... EU TAVA ESCREVEND0 LENGHT
