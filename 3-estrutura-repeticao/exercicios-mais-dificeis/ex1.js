const prompt = require('prompt-sync')()
/*
1) Escreva um programa que verifica se um número inteiro
positivo fornecido pelo usuário é primo ou não. Um número
primo é aquele que é divisível apenas por 1 e por ele mesmo.
*/

let numero = Number(prompt('Insira um valor: '));

if (numero < 0){
    console.log('Forneça um valor maior que 0!')
} else if (numero == 0 || numero == 1){
    console.log(`${numero} não eh considerado primo!`)
} else {
    let divisor = 2;

    while(numero % divisor == 0){
        if (numero == divisor){
            console.log(`${numero} eh primo!`)
        }
        console.log(`${numero} nao eh primo!`)
    }
}