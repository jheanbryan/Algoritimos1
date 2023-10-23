const prompt = require('prompt-sync')()

let n = Number(prompt('Insira um numero n: '));
let somaDePares = 0;
let somaDeImpares = 0;

for (let i = 1; i <= n; i++) {
    let novoNumero = Number(prompt(`Digite o numero ${i}: `));
    if (novoNumero % 2 == 0){
        somaDePares+=novoNumero;
    } else{
        somaDeImpares+=novoNumero;
    }
}

console.log(`A soma dos números pares eh: ${somaDePares}`);
console.log(`A soma dos números impares eh: ${somaDeImpares}`);