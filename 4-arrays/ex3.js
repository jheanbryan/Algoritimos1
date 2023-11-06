const prompt = require('prompt-sync')();
/*
Fazer  um  programa  para  ler  10  valores  e,  em  seguida,  mostrar  a 
posição onde se encontram o maior e o menor valor.
*/

let array = [];
let maior, menor, posMaior, posMenor;

for (let i = 0; i < 10; i++) {
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