const fabricantes = ['Mercedes', 'Wolks', 'BMW']

function imprimir (marca, indice){
    console.log(`${indice + 1}. ${marca}`)
}

fabricantes.forEach(imprimir)
//o ForEach por padrao primeiro pega o elemento do array e depois o indice
fabricantes.forEach(a => console.log(a))
//como ele passou só um parametro nessa chamada, o forEach pega primeiro o elemento e depois o indice... aqui ele so vai mostrar o nome das marcas