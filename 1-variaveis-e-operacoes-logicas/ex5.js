const prompt = require('prompt-sync')();
/*
5) Faça um algoritmo que leia a idade de uma
pessoa expressa em dias e mostre-a expressa em
anos, meses e dias.
*/

let idadeEmDias = Number(prompt('Idade em Dias: '));
let idadeEmAnos = idadeEmDias/365;
let idadeEmMeses = idadeEmDias/30;

console.log(`${idadeEmAnos.toFixed(0)} Anos \n${idadeEmMeses.toFixed(0)} Meses \n${idadeEmDias.toFixed(0)} Dias`)