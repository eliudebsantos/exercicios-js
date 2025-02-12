
  function ordenar(nome, n1, n2, n3){
    let teste = []
    teste.push(n1)
    teste.push(n2)
    teste.push(n3)
    teste.sort((a, b) => a - b)//metodo para ordenar array de forma crescente, se for decrescente é a conta é "b - a"
    //positivo faz a troca e negativo nao faz a troca

    let media = ((teste[0] * 4) + (teste[1] * 3) + teste[2] * 3 )/10
    console.log(`${nome}: notas: ${teste[0]}, ${teste[1]}, ${teste[2]} media: ${media} ${media >= 5? "APROVADO": "REPROVADO"}`)
  }  
console.log(ordenar("Eliude", 4, 8, 6))