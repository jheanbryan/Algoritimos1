const prompt = require('prompt-sync')();
/*
3) Uma revendedora de carros usados paga a seus
funcionários vendedores um salário fixo por mês, mais uma
comissão também fixa para cada carro vendido e mais 5%
do valor das vendas por ele efetuadas. Escrever um
algoritmo que leia o número de carros pro ele vendidos, o
valor total de suas vendas, o salário fixo e o valor que ele
recebe por carro vendido. Calcule e escreva o salário final
do vendedor.
*/

let numeroDeCarrosVendidos = Number(prompt('Insira o N° de carros vendidos: '));
let valorTotalDeVendas = Number(prompt('Insira o valor total de vendas: '));
let salarioFixo = Number(prompt('Insira o salario fixo: '));
let valorPorCarroVendido  = Number(prompt('Insira o valor por carro vendido: '));

let valorFinal = salarioFixo + (valorPorCarroVendido*numeroDeCarrosVendidos) + (valorTotalDeVendas*0.05);

console.log(valorFinal);