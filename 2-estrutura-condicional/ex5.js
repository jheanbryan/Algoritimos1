const prompt = require('prompt-sync')()
/*
5) Construa um algoritmo que receba como entrada três valores
e os imprima em ordem crescente (do menor para o maior).
*/

let num1 = Number(prompt('Insira o 1º valor: '));
let num2 = Number(prompt('Insira o 2º valor: '));
let num3 = Number(prompt('Insira o 3º valor: '));
let maior, meio, menor;

if (num1 > num2 && num1 > num3){
    //console.log(`O maior de todos é o num1.`)
    maior = num1;
    if (num2 > num3){
        meio = num2;
        menor = num3;
    } else {
        meio = num3;
        menor = num2;
    }
} else if (num2 > num1 && num2 > num3){
    //console.log(`O maior de todos é o num2.`)
    if (num1 > num3){
        meio = num1;
        menor = num3;
    } else {
        meio = num3;
        menor = num1;
    }
    maior = num2;
} else if (num3 > num1 && num3 > num2){
    //console.log(`O maior de todos é o num3.`)
    maior = num3;
    if (num1 > num2){
        meio = num1;
        menor = num2;
    } else {
        meio = num2;
        menor = num1;
    }
}

console.log(`\n${menor}, ${meio}, ${maior}\n`)