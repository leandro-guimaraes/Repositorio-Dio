/*
função para definir descontos em produtos.

Código condição de pagamento:
1 - À vista débito, recebe 10% de desconto;
2 - À vista  no dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%

*/

function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * (juros / 100)));
}

let precoEtiqueta = 100;
let formaDePagamento = 4;

if(formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if(formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if(formaDePagamento === 3) {
    console.log(precoEtiqueta);
}else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}
