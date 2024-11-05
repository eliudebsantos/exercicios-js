const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i in numeros){
   
    if (i == 5){
        break
    }
    console.log(`${i} = ${numeros[i]}`);
}

console.log('=====================')

for (y in numeros){
    
    if (y == 5){
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}

externo: 
for (a in numeros){
    for (b in numeros){
        if (a == 1 && b == 3){
            break externo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}