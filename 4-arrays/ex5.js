const prompt = require('prompt-sync')();
/*

*/

let a = [];
a = [1, 0, 5, -2, 5, 7];

let somaEntreValores = a[0] + a[1] + a[5];
console.log(`A soma dos valores: ${somaEntreValores}`);

a[4] = 100;

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}