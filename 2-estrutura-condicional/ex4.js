const prompt = require('prompt-sync')();

/*
4) Construa um algoritmo que leia um número inteiro de 1 a 7 e
informe o dia da semana correspondente, sendo domingo o dia
de número 1. Se o número não corresponder a um dia da
semana, mostre uma mensagem de erro.
*/

let n = Number(prompt('Insira um numéro de 1 a 7: '));

switch (n) {
    case 1:
        console.log('Domingo') 
        break;

    case 2:
        console.log('Segunda-Feira') 
        break;

    case 3:
        console.log('Terça-Feira') 
        break;

    case 4:
        console.log('Quarta-Feira') 
        break;

    case 5:
        console.log('Quinta-Feira') 
        break;

    case 6:
        console.log('Sexta-Feira') 
        break;

    case 7:
        console.log('Sábado') 
        break;

    default:
        console.log('[ERRO]: Insira um valor válido, de 1 a 7!')
        break;
}