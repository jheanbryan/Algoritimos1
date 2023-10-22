const prompt = require('prompt-sync')()
/*
2) Crie um algoritmo que calcula o desconto previdenciário de
um funcionário. Dado um salário, o programa deve retornar o
valor do desconto proporcional ao mesmo. O cálculo segue a
regra: o desconto é de 11% do valor do salário, entretanto, o
valor máximo de desconto é 318,20. Sendo assim, ou o algoritmo
retorna o valor equivalente a 11% sobre o salário ou 318,20.
*/

let salario = Number(prompt('Insira o valor do salário: '));
let desconto = 0.11 * salario;

if (desconto >= 318.20){
    desconto = 318.20;
    console.log(`O valor do desconto é: ${desconto.toFixed(2)}`)
} else {
    console.log(`O valor do desconto é: ${desconto.toFixed(2)}`)
}