const prompt = require('prompt-sync')()
/*
Escreva um algoritmo que contenha uma função que recebe, por
parâmetro, um valor inteiro e positivo e retorna o somatório
desse valor.
Seu algoritmo deverá exibir na saída o valor do somatório retornado
pela função criada.

function somatorio (num)
*/

let valor = Number(prompt('Insira um valor: '));
somatorio(valor);

function somatorio(num) {
    let res = 0;
    for (let i = num; i > 0; i--) {
        res += i;
    }
    console.log(res);
}