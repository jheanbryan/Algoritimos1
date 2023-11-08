const prompt = require('prompt-sync')();
/*
Crie um algoritmo que leia 15 números e exiba esses números
sem repetições (ou seja, exiba apenas os números distintos), você
pode usar um vetor para armazenar os números e, enquanto
lê cada número, verificar se ele já foi lido anteriormente.

Exemplo
Entrada: 1 2 7 4 5 5 5 6 7 8 7 3 7 1 1
Saída: 1 2 7 4 5 6 8 3
*/

let array = [];
let numerosDiferentes = [];

for (let i = 0; i < 3; i++) {
    array[i] = Number(prompt(`Insira o valor da posição ${i}°: `));

    if (i == 0){
        numerosDiferentes[i] = array[i];

    } else{
        if (array[i] != array[i-1]) {
            console.log('achei um diferente, que é: ' + array[i]);
            numerosDiferentes[i] = array[i];
            
        } else{
            console.log('achei um igual, que é: '+ array[i]);

        }
    }

}
console.log(array);
console.log(numerosDiferentes);
