
// podemos ver objetos em javascript como uma coleção de chave e valor, onde posso adicionar e deletar de forma dinâmica.


/*const pessoa = {
    nome: 'Leandro Guimarães',
    idade: 32
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);
*/

const pessoa = {
    nome: 'Leandro Guimarães',
    idade: 32,

     //uma função dentro de um objeto é chamada de método.
    // Como estou dentro do objeto posso usar seus valores acima.
    descrever: function() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}.');
    }
};

/* pessoa.altura = 1.93;
delete pessoa.nome;
console.log(pessoa);
*/

pessoa.descrever();

