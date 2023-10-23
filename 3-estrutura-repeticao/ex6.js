const prompt = require('prompt-sync')()
/*
6) Escreva um algoritmo para imprimir os 30 primeiros números inteiros pares
maiores que 1001
*/
let n = 1002;
for (let i = 1; i <= 30; i++) {
    if (n % 2 == 0){
        console.log(`${i}°: ${n}`)
        n+=2;
    } else {
        n++;
    }
}