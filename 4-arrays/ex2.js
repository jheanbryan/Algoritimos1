const prompt = require('prompt-sync')();
/*
Escreva um programa que leia 10 números inteiros e os armazene
em um vetor. Imprima o vetor, o maior elemento e a posição que
ele se encontra.
*/

let array = [];
let maior, pos;

for (let i = 0; i < 5; i++) {
    array[i] = Number(prompt(`Insira o valor da ${i}º posição: `))

    if (i === 0){
        maior = array[i];
        pos = i;

    } else if (array[i] > array[i - 1]){
        maior = array[i];
        pos = i;

    }
}
console.log(array)
console.log(`Maior: ${maior}`)
console.log(`Posição: ${pos}`)