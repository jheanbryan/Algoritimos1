const prompt = require('prompt-sync')()
/*
Escreva um algoritmo que contenha uma função que receba um
valor inteiro e positivo e calcula o seu fatorial.
Seu algoritmo deverá exibir na saída o valor do fatorial retornado
pela função criada.

function fatorial (numero)
*/

let valor = Number(prompt('Insira um valor: '));
fatorial(valor);

function fatorial(num) {
    let res = 1;
    for (let i = num; i > 0; i--) {
        res *= i;
    }
    console.log(res);
}