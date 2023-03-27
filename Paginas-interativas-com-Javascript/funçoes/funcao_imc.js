/*
Usando funções 

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



function calcularImc(peso,altura){
    return peso / Math.pow(altura, 2);
}
function classificarImc (imc){

    if (imc < 18.5) {
        return 'Você está abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Seu peso está normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Você está acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Você está obeso';
    } else {
        return 'Você está com obesidade grave';
    }
    
}
  /* 
  essa maneira de chamar nao sera usada no decorrer, mas tambem é valida.
   function main(){

        let peso = 110;
        let altura = 1.93;
        let imc = calcularImc(peso, altura);
        console.log(classificarImc(imc));

    }

    main();
*/

// Esse codigo abaixo será a main.
(function (){

    let peso = 110;
    let altura = 1.93;
    let imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

})();