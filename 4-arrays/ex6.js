const prompt = require('prompt-sync')();
/*
Ler  um  conjunto  de  números  reais,  armazenando-o  em  vetor  e 
calcular o quadrado das componentes deste vetor (de cada 
posição),  armazenando  o  resultado  em  outro  vetor.  Os  conjuntos 
têm 10 elementos cada. Imprimir todos os conjuntos.
*/

let conjuntoNumerosReais = [];
let quadradoComponentes = [];
let quadrado;

for (let i = 0; i < 3; i++) {
    conjuntoNumerosReais[i] = Number(prompt(`Insira o valor da posição ${i}: `));
    quadrado = conjuntoNumerosReais[i] **2;
    quadradoComponentes[i] = quadrado;
}

console.log(`Conjunto de Numeros: ${conjuntoNumerosReais}`);
console.log(`Quadrados dos Numeros: ${quadradoComponentes}`);

