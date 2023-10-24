

const prompt = require('prompt-sync')();
/*
4) O objetivo deste exercício é escrever um programa que dado
um número fornecido pelo usuário, verifica se ele é um número
de Armstrong. Os números de Armstrong (também conhecidos
como números narcisistas ou números plenos) são números
inteiros positivos em que a soma das potências de seus dígitos é
igual ao próprio número. Por exemplo, 153 é um número de
Armstrong porque 1^3 + 5^3 + 3^3 é igual a 153.
*/

let totalDeDigitos = Number(prompt('Quantos digitos tem seu numero? '));
let numero = '';
let resultado = 0;

for (let i = 1; i <= totalDeDigitos; i++){
    let digito = prompt(`Digite o ${i}° dígito: `);
    numero += digito;

    let potencia = Number(digito) ** totalDeDigitos;
    resultado += potencia;
}
if (numero == resultado){
    console.log(`O numero ${numero} é um número de Armstrong`);
} else {
    console.log(`O numero ${numero} não é um número de Armstrong`);
}
