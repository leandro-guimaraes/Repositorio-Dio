/*
Elabore um algoritmo que calcule o que deve  ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cáculo
adequado.


Código condição de pagamento:
1 - À vista débito, recebe 10% de desconto;
2 - À vista  no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%

*/

let precoetiqueta = 100;
let formaDePagamento = 4;

if(formaDePagamento === 1) {
    console.log(precoetiqueta -(precoetiqueta *  0.1));
}else if(formaDePagamento === 2) {
    console.log(precoetiqueta -(precoetiqueta *  0.15));
}else if(formaDePagamento === 3) {
    console.log(precoetiqueta);
}else {
    console.log(precoetiqueta + (precoetiqueta *  0.1));
}
