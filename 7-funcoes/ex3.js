const prompt = require('prompt-sync')()
/*
Escreva um algoritmo que contenha uma função que recebe, por
parâmetro, dois valores X e Z e calcula e retorna Xz
Seu algoritmo deverá exibir na saída o valor do potencia retornado
pela função criada.

function potencia (x, z)
*/

let x = Number(prompt('Insira um valor X: '));
let z = Number(prompt('Insira um valor Z: '));
potencia(x, z);

function potencia(x, z) {
    let potencia = x ** z
    console.log(potencia);
}