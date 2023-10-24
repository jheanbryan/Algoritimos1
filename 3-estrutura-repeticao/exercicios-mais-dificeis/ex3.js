const prompt = require('prompt-sync')();

let inicio = Number(prompt('Insira o número de início do intervalo: '));
let fim = Number(prompt('Insira o número de fim do intervalo: '));

for (let i = inicio; i <= fim; i++) {
    let numero = i;
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
}