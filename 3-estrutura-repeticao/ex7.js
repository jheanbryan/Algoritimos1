const prompt = require('prompt-sync')()
/*
7) Escreva um algoritmo para imprimir os 30 primeiros números
inteiros maiores que 100
*/
let n = 100;
for (let i = 1; i <= 30; i++) {
    n++;
    console.log(`${i}°: ${n}`);
}