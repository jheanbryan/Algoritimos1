const prompt = require('prompt-sync')();

/*
2) O custo de um carro novo ao consumidor é a soma do
custo de fábrica com a porcentagem do distribuidor e dos
impostos (aplicados ao custo de fábrica). Supondo que o
percentual do distribuidor seja de 28% e os impostos de
45%, escrever um algoritmo para ler o custo de fábrica de
um carro, calcular e escrever o custo final ao consumidor
*/

let custoDeFabrica = Number(prompt('Insira o custo de fábrica: '));
let porcentagemDoDistribuidor = 0.28;
let impostosAosCustosDeFabrica = 0.45;
let custoFinal = custoDeFabrica + (custoDeFabrica*porcentagemDoDistribuidor) + (custoDeFabrica*impostosAosCustosDeFabrica);

console.log(custoFinal);