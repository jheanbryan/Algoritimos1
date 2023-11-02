const prompt = require('prompt-sync')();
/*
Faça um programa que receba do usuário um vetor com 10
posições. Em seguida deverá ser impresso o maior e o menor
elemento (numero) do vetor.
*/

let array = [];
let maior, menor, posMaior, posMenor;
for (let i = 0; i < 5; i++) {
    array[i] = Number(prompt(`Insira o valor da ${i}º posição: `));

    if (i == 0){
        //startando as variaveis para nao ficarem vazias
        maior = array[i];
        menor = array[i];
        posMaior, posMenor = i;
        
    } else{
        if (array[i] > array[i-1]) {
            //maior valor
            maior = array[i];
            posMaior = i;
    
        } else if (array[i] < array[i-1]) {
            //menor valor
            menor = array[i];
            posMenor = i;
        }
    } 
}

console.log(array);
console.log(`O maior valor é: ${maior}, e sua posção: ${posMaior}`)
console.log(`O menor valor é: ${menor}, e sua posção: ${posMenor}`)