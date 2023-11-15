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
let triangularEmCima, triangularEmBaixo;

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Insira o valor da posição: A${linha}x${coluna}: `));
    }
}


//triangulo em cima
if (matriz[0][1] == 0 && matriz[0][2] == 0 && matriz[0][3] == 0 && matriz[0][4] == 0 &&
    matriz[1][2] == 0 && matriz[1][3] == 0 && matriz[1][4] == 0 &&
    matriz[2][3] == 0 && matriz[2][4] == 0 &&
    matriz[3][4] == 0) {
    triangularEmCima = true;
}

//triangulo em baixo
if (matriz[4][0] == 0 && matriz[4][1] == 0 && matriz[4][2] == 0 && matriz[4][3] == 0 &&
    matriz[3][0] == 0 && matriz[3][1] == 0 && matriz[3][2] == 0 &&
    matriz[2][0] == 0 && matriz[2][1] == 0 &&
    matriz[1][0] == 0){
    triangularEmBaixo = true;
}

if(triangularEmCima == true && triangularEmBaixo == true ){
    console.log('A matriz é triangular em cima e em baixo')
    console.table(matriz);

} else if (triangularEmCima == true){
    console.log('A matriz é triangular em cima')
    console.table(matriz);
    
} else if (triangularEmBaixo == true){
    console.log('A matriz é triangular em baixo')
    console.table(matriz);
}