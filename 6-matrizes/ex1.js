const prompt = require('prompt-sync')()
/*
Ler uma matriz 4x5 de reais, calcular e imprimir a soma de todos os
seus elementos.
*/

let matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Insira o valor da posição: A${linha}x${coluna}: `));

    }
}
console.table(matriz);