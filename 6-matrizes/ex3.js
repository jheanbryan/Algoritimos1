const prompt = require('prompt-sync')()
/*
Criar um algoritmo que entre com valores inteiros para uma matriz m3x3
e imprima a matriz final, conforme mostrado a seguir:
*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Insira o valor da posição: A${linha}x${coluna}: `));

    }
}


let linha1 = matriz[0];
let linha2 = matriz[1];
let linha3 = matriz[2];

let matrizTrocada = [
    linha3,
    linha2,
    linha1
];

let matrizFinal = matrizTrocada;

for (let linha = 0; linha < matrizTrocada.length; linha++) {
    matrizFinal[linha] = [
        matrizTrocada[linha][2],
        matrizTrocada[linha][1],
        matrizTrocada[linha][0],
    ];
}

console.table(matrizTrocada)