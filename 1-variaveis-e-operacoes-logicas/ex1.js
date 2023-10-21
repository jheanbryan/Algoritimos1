const prompt = require('prompt-sync')();

/*
1) Escreva um algoritmo para ler o salário mensal atual de
um funcionário e o percentual de reajuste. Calcular e
escrever o valor do novo salário.
*/

let salarioMensalAtual = Number(prompt('Insira seu salário mensal atual: '));
let percentualDeReajuste = Number(prompt('Percentual de reajuste: '));
let novoSalario = salarioMensalAtual + (salarioMensalAtual * (percentualDeReajuste / 100));

console.log(novoSalario)