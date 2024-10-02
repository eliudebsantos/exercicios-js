function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;//se um for verdadeiro, o outro vai ser falso
    const manterSaudavel = !comprarSorvete;//se não fazer nenhum trampo vai dar negativo, negando ele, vai ser substituido pelo positivo --- mantendo-se saudavel

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));