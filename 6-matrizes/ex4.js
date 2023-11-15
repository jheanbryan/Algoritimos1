const prompt = require('prompt-sync')()
/*
Criar um algoritmo que leia
os elementos de uma
matriz inteira 5 x 5 e
escreva se ela é triangular
ou não.
*/

let matriz = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
];

/*
for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Insira o valor da posição: A${linha}x${coluna}: `));
        soma+=matriz[linha][coluna];
    }
}
*/
