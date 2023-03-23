/*
Fazer um programa que calcule o valor gasto de combustivel em uma viagem.

Onde terei 3 variaveis. Sendo elas:
1- Preço do combustivel;
2- valor médio de gasto pelo carro por KM rodado;
3- Distância em KM da viagem;

*/
let precoEtanol = 4.60;
let precoGasolina = 5.90;
const kmPorLitro = 10;
let distanciaEmKm = 100;
let tipoCombustivel = 'Gasolina';


let litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {

  let valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));

} else {

  let valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));

}
