/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

//duas palavras como parametro

function teste (palavra1, palavra2){
    let estaContido = true;
    for (i = 0; i < palavra1.length; i++){
        let caracterePalavra1 = palavra1.charAt(i).toLowerCase()
        for (j = 0; j < palavra2.length; j++){
            let caracterePalavra2 = palavra2.charAt(j).toLowerCase()
            if (caracterePalavra1 == caracterePalavra2){
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        
    }

    for (i = 0; i < palavra2.length; i++){
        let caracterePalavra2 = palavra2.charAt(i).toLowerCase()
        for (j = 0; j < palavra1.length; j++){
            let caracterePalavra1 = palavra1.charAt(j).toLowerCase()
            if(caracterePalavra2 == caracterePalavra1){
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        
    }
    return estaContido
}

console.log(teste("ekjdjjfakdlkjdjblslksjsc", "qwwweewqqaeqewreeqqbqewqwewrwc"))