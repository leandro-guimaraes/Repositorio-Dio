function sayMyName(name){
    console.log('Your name is '+ name);
}

sayMyName('Leandro');
sayMyName('Eduardo');

//////////////////////////////////////////////

function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

/////////////////////////////////////////////

function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(10) + quadrado(10));

////////////////////////////////////////////

function incrementarJuros(valor,percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
// Aqui estou incrementando juros de 10% encima do valor de R$ 100 reais
console.log(incrementarJuros(100, 10));

