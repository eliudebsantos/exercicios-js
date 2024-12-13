let comparaComThis = function (param){
    console.log(this === param)
}
//por não estar em um arrow, o this vai se comportar como global
comparaComThis(global)//true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//usando o BIND para amarrar o this tem daonde esta sendo executada
comparaComThis(global)//false
comparaComThis(obj)//true

let comparaComThisArrow = param => console.log(this === param)
//por ter usado arrow, o this não vai se comportar como global
comparaComThisArrow(global)//false
comparaComThisArrow(module.exports)//mais pra frente

comparaComThisArrow = comparaComThisArrow.bind(obj)
//não tem como amarrar o this se ele estiver em um arrow
comparaComThisArrow(obj)//false
comparaComThisArrow(module.exports)//true