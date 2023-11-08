const prompt = require('prompt-sync')();
/*
Faça  um  programa  para  ler  a  nota  da  prova  de  15  alunos  e 
armazene num vetor, calcule e imprima a media geral, maior nota 
e menor nota.
*/

let notas = [];
let mediaGeral = 0, maiorNota, menorNota;

for (let i = 0; i < 15; i++) {
    notas[i] = Number(prompt(`Insira a nota do aluno da posição ${i}: `));
    mediaGeral+= notas[i];

    if (i == 0) {
        maiorNota = notas[i];
        menorNota = notas[i];

    } else{
        if(notas[i] > maiorNota){
            maiorNota = notas[i];

        } else if(notas[i] < menorNota){
            menorNota = notas[i];
            
        }

    }

}
mediaGeral= mediaGeral/15;

console.log(`\nMedia geral: ${mediaGeral.toFixed(2)}`);
console.log(`Maior nota: ${maiorNota}`);
console.log(`Menor nota: ${menorNota}`);
