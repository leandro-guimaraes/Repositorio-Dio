
class Pessoa{

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - this.idade;
    }

    descrever(){
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}.');
    }
}

/*
const Leandro = new Pessoa();
Leandro.nome = 'Leandro guimarães';
Leandro.idade = 32;

const Dilsinho = new Pessoa();
Dilsinho.nome = 'Dilsinho Peralta';
Dilsinho.idade = 2;


Leandro.descrever();
*/

const Leandro = new Pessoa('Leandro',32);
const Dilsinnho = new Pessoa('Dilsinho',2);

console.log(Leandro);