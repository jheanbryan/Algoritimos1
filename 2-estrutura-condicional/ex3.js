const prompt = require('prompt-sync')()
/*
3) Crie um algoritmo que determine se um número fornecido é
par ou ímpar.
*/

let numero = Number(prompt('Insira um valor: '))
if (numero % 2 == 0){
    console.log('O número é par');
} else {
    console.log('O número é impar');
}