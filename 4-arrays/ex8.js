const prompt = require('prompt-sync')();
/*
Leia  um  vetor  de  10  posições.  Contar  e  escrever  quantos  valores 
pares ele possui.
*/

let vetor = [];
let qtdDePar = 0;

for (let i = 0; i < 10; i++) {
    vetor[i] = Number(prompt(`Insira o valor da posição: ${i}: `));

    if (vetor[i] % 2 == 0){
        //console.log(`${vetor[i]} é par`);
        qtdDePar++
    }
}

console.log('\nA quantidae de valores pares eh: ' + qtdDePar);
