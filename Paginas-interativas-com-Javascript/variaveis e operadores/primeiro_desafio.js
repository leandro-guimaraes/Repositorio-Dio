  /*
Fazer um programa que calcule o valor gasto de combustivel em uma viagem.

Onde terei 3 variaveis. Sendo elas:
1- Preço do combustivel;
2- valor médio de gasto pelo carro por KM rodado;
3- Distância em KM da viagem;

*/

let precoCombustivel = 5.79;
const kmPorLitro = 10;
let distanciaEmKm = 100;

let litrosConsumidos = distanciaEmKm / kmPorLitro;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));