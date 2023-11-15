const prompt = require('prompt-sync')()
/*
Criar um algoritmo que leia os elementos de uma matriz inteira 3 x 3 e
imprima o produto dos elementos que estão abaixo da diagonal
principal.
*/

let produto = 1;
let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Insira o valor da posição: A${linha}x${coluna}: `));

        if (linha == 1 && coluna == 0) {
            produto = produto * matriz[linha][coluna];

        } else if (linha == 2 && (coluna == 1 || coluna == 2)) {
            produto = produto * matriz[linha][coluna];
        }
    }
}


console.log(matriz);

console.log(`O produto da matriz é: ${produto}`)