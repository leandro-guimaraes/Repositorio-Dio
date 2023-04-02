
//const funcoes = require('./funcoes_auxiliares');
//console.log(funcoes);

/*
Uma sala contém 5 alunose para cada aluno foi sorteado um numero de 1 a 100.
faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior número sorteado.
Dados de entrada:
5
50
10
98
23

Saida:
98

*/

let {gets, print} = require('./funcoes_auxiliares');

/* 
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
*/

/*
let numerosSorteados = [];
for(let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}
let maiorValor = 0;

for(let i = 0; i < numerosSorteados.length; i++){
    let numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
*/

// Posso tambem simplificar sem precisar de uma lista.

let maiorValorEncontrado = 0;
for(let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}
print(maiorValorEncontrado);