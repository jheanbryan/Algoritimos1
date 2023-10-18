const prompt = require('prompt-sync')()

let n = 4;
let impar = 1;
let qtdDeImpares;

for (let i = 1; i <= n; i++) {
    console.log(impar);
    impar = impar + 2;
    i = i + 1;
    console.log(impar);
}