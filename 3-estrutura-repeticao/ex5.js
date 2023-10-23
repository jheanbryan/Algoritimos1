const prompt = require('prompt-sync')()
/*
5) Escreva um algoritmo para imprimir os 25 primeiros números inteiros
múltiplos de 3 e 5 (ao mesmo tempo) maiores que 5000.
*/
let n = 5010;
for (let i = 1; i <=25; i++) {
    if (n % 3 == 0 && n % 5 ==0){
        console.log(`${i}°: ${n} é multiplo de 3 e 5;`)
        n+=15;
    } else{
        n++;
    }

}