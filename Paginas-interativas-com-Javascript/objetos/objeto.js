
class Pessoa{

    nome;
    idade;

    constructor(){
        this.nome = 'teste';
        this.idade = 2;
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

const Leandro = new Pessoa();
const Dilsinnho = new Pessoa();

Leandro.descrever();
Dilsinnho.descrever();