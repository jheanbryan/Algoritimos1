const prompt = require('prompt-sync')();

let a = Number(prompt('Insira o valor de A: '));
let b = Number(prompt('Insira o valor de B: '));
let aux;
let r = a % b;

if (a == 0){
    console.log(`O MDC eh ${b}`);
} else{
    while(r > 0){
    // substituindo A por B 
    aux = a;
    a = b;
    b = aux;

    // substituindo B por R e
    aux = b;
    b = r;
    r = aux;
    r = a % b;

    }

    console.log(`O MDC eh ${b}`);
}