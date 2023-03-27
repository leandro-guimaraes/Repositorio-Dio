/*
As funções em JavaScript são blocos de código que realizam uma tarefa específica e podem ser chamados várias vezes ao longo do código.
Elas podem ser definidas usando a palavra-chave function seguida de um nome, parâmetros entre parênteses e um bloco de código entre chaves.
Por exemplo:

*/
function soma(a, b) {
    return a + b;
  }

  /*
As funções podem ter parâmetros que são valores passados para a função quando ela é chamada. 
Eles podem ser usados dentro da função para realizar operações.
As funções também podem ter um valor de retorno, que é o resultado da operação realizada dentro dela. 
O valor de retorno é definido com a palavra-chave return.

Por exemplo:
  
  */
function soma(a, b) {
    return a + b;
  }
  
  let resultado1 = soma(2, 3);
  console.log(resultado1); // 5
/*
As funções também podem ser atribuídas a variáveis e passadas como argumentos para outras funções.
Por exemplo:

*/  
let quadrado = function(x) {
    return x * x;
  }
  
  function aplicaFuncao(func, x) {
    return func(x);
  }
  
  let resultado = aplicaFuncao(quadrado, 3);
  console.log(resultado); // 9
  