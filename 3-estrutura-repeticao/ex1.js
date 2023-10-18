const prompt = require('prompt-sync')()


let n = Number(prompt('Insira um numero n: '));
let soma = 0;

for (let i = 1; i <= n; i++) {
    soma = soma + i;
}
console.log(`A soma dos ${n} primeiros inteiros positivos é ${soma}.`)