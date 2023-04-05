/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um  semestre da faculdade calcule e imprima
a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota1 + nota2 + nota3)/ 3;

Classificação:
- Media menor que 5, reprovação;
- media entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

let nota1 = 5;
let nota2 = 3;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
    console.log('Você esta reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Você esta de recuperação');
} else {
    console.log('Você foi aprovado!');
}