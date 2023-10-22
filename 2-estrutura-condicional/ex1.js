const prompt = require('prompt-sync')();
/*
1) Faça um algoritmo que leia dois números e indique se são
iguais ou se são diferentes. Mostre o maior e o menor (nesta
sequência).
*/

let num1 = Number(prompt('Insira o 1º valor: '))
let num2 = Number(prompt('Insira o 2º valor: '))

if (num1 == num2){
    console.log('Os números são iguais');
} else if (num1 != num2) {
    console.log('Os números são diferentes');

    if (num1 > num2){
        console.log(`${num1} é maior que ${num2}`)
    } else {
        console.log(`${num2} é maior que ${num1}`)
    }
}
