/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100    Cachorro Quente        R$ 3,00
200    Hambúrguer Simples     R$ 4,00
300    Cheeseburguer          R$ 5,50
400    Bauru                  R$7,50
500    Refrigerante           R$ 3,50
600    Suco                   R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function pedido (cod, qtde) {
    switch (cod){
        case 100:
            console.log(qtde + " Cachoro quente: R$" + (3.00 * qtde).toFixed(2).toString().replace(".", ",") )
            break
        case 200:
            console.log(qtde + " Hamburguer simples: R$" + (4.00 * qtde).toFixed(2).toString().replace(".", ",") )
            break
        case 300:
            console.log(qtde + " Cheeseburguer: R$" + (5.50 * qtde).toFixed(2).toString().replace(".", ",") )
            break
        case 400:
            console.log(qtde + " Bauru: R$" + (7.50 * qtde).toFixed(2).toString().replace(".", ",") )
            break
        case 500:
            console.log(qtde + " Refrigerante: R$" + (3.50 * qtde).toFixed(2).toString().replace(".", ",") )
            break
        case 600:
            console.log(qtde + " Suco: R$" + (2.80 * qtde).toFixed(2).toString().replace(".", ",") )
            break
        default:
            console.log("Pedido incorreto")
            
        
    }
}

pedido(100, 2)
pedido(200, 3)
pedido(300, 4)
pedido(400, 2)
pedido(500, 5)
pedido(600, 1)
pedido(2)