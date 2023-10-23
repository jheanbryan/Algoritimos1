const prompt = require('prompt-sync')()

let n = Number(prompt('Insira um numero n: '));
let impar = 1;

if (n>0){
    for (let i = 1; impar <= n; i+=2) {
        console.log(i);
        impar++
    }
} else{
    console.log('[ERRO]: Insira um numero maior que 0')
}


/*
n     -->  é a quantidade de números ímpares que você deseja imprimir
impar --> é uma variável que conta quantos números ímpares já foram impressos.
*/