const prompt = require('prompt-sync')();
/*
Crie um algoritmo que leia 8 números e exiba-os em ordem
inversa (utilizar vetor)
Exemplo de Entrada e Saída
Entrada: 2 5 1 4 7 3 6 8
Saída: 8 6 3 7 4 1 5 2
*/

let array = [];

for (let i = 0; i < 8; i++) {
    array[i] = Number(prompt(`Valor da ${i}° posição: `));
}
for (let i = 7; i >= 0 ; i--){
    console.log(array[i]);
}