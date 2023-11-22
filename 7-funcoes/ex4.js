const prompt = require('prompt-sync')()
/*
Escreva um algoritmo que contenha uma função que recebe, por
parâmetro, um numero e retorna true se ele for palíndromo ou
false caso não seja.

Seu algoritmo deverá usar a função criada para verificar se o
número é palíndromo e, baseado no retorno da função, exibir uma
mensagem indicando se ele é ou não palíndromo.

function palindromo (x)
*/

let valor = Number(prompt('Insira um valor: '));
palindromo(valor);

function palindromo(num) {
    let res = null;
    if (num % num == 0) {
        res = true;
    } else {
        res = false
    }
}