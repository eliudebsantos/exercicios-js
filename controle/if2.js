function teste (num){
    if(num >= 7)
        console.log(num)//se não tem chaves, so é executado uma linha de comando

    console.log('final...')

} 

teste(8);
teste(2);

function teste2 (num) {
    if(num >= 7); {//Cuidado com ponto e virgula, não usar com estruturas de controle
        console.log(num)
    }
}

teste2(8);
teste2(2);


