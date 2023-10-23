const prompt = require('prompt-sync')()

/*
Faça um algoritmo que leia uma quantidade não
determinada de números positivos. Calcule a quantidade
de números pares e ímpares, a média de valores pares e
a média geral dos números lidos. O número que
encerrará a leitura será zero.
*/
let qtdDePares = 0;
let qtdDeImpares = 0;
let mediaDePares = 0;
let mediaGeral = 0;
let numero = 1;
let somaTotal = 0;


while (numero !=0) {
    numero = Number(prompt('Insira um valor: '));

    if (numero == 0){
        //nao faz nada, so parra reto
    } else {
        if (numero % 2 == 0) {
            qtdDePares++;
            mediaDePares+= numero;
        } else {
            qtdDeImpares++;
        }
        somaTotal += numero;
    }
}

mediaDePares = mediaDePares / qtdDePares;
mediaGeral = somaTotal / (qtdDePares + qtdDeImpares);

console.log(`Quantidade de pares: ${qtdDePares}\nQuantidade de impares: ${qtdDeImpares}`);
console.log(`Media de pares: ${mediaDePares}\nMedia Geral: ${mediaGeral}`);