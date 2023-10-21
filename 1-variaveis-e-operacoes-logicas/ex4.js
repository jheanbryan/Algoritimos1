
/*
4) Faça um algoritmo que leia a idade de uma pessoa
expressa em anos, meses e dias e mostre-a expressa
apenas em dias.
*/

let idadeEmAnos = Number(prompt('Idade em anos: '));
let idadeEmMeses = Number(prompt('Idade em meses: '));
let idadeEmDias = Number(prompt('Idade em dias: '));
let idade = (idadeEmAnos*365) + (idadeEmMeses*30) +idadeEmDias;

console.log(idade)