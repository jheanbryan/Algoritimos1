const prompt = require('prompt-sync')()
/*
1) Escreva um programa que verifica se um número inteiro
positivo fornecido pelo usuário é primo ou não. Um número
primo é aquele que é divisível apenas por 1 e por ele mesmo.
*/


let numero = Number(prompt('Insira um valor:'));
let divisor = 2;

if (numero < 0) {
    console.log('Forneça um valor maior que 0!');
} else if (numero == 0 || numero == 1) {
    console.log(`${numero} não é considerado primo!`);
} else {
    while (numero % divisor != 0) {
        divisor++;
    }
    
    if (numero == divisor) {
        console.log(`${numero} é primo!`);
    } else{
        console.log(`${numero} não é primo!`);
    }
    
}
