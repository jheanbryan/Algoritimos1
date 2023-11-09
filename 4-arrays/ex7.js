const prompt = require('prompt-sync')();
/*
Faça um programa que leia um vetor de 8 posições e, em seguida, 
leia também dois valores X e Y quaisquer correspondentes a duas 
posições no vetor. Ao final seu programa deverá escrever a soma 
dos valores encontrados nas respectivas posições X e Y .
*/

let vetor = [];
for (let i = 0; i < 8; i++) {
    vetor[i] = Number(prompt(`Insira o valor da posição: ${i}: `));
}
let x = Number(prompt('Insira um valor para X: '));
let y = Number(prompt('Insira um valor para Y: '));

console.log(`\n`)
console.log(vetor)
console.log(`A soma dos valores da posição ${x} e ${y} é ${vetor[x] + vetor[y]}`);