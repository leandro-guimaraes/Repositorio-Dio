/*
O IMC-  indice de massa corporal é um critério da organização mundial de saúde
 para dar uma indicação sobre a condião de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore  um algoritmo que dado  o peso e altura de um adulto mostre sua  condição de acordo
com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5  e 25 Peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave;
*/

let peso = 110;
let altura = 1.93;
let imc = peso / (altura * altura);
console.log('Seu IMC é ' + imc);

if (imc < 18.5) {
    console.log('Você está abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Seu peso está normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Você está acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso');
} else {
    console.log('Você está com obesidade grave');
}