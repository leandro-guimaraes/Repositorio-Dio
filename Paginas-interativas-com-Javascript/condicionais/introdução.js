/*
As condicionais em JavaScript permitem que você controle o fluxo de execução do seu código com base em uma condição específica.
 Existem três tipos de condicionais em JavaScript: if, if-else e switch.
*/

//############################################################ IF ########################################################################

/*


A condicional "if" verifica se uma condição é verdadeira e executa o bloco de código dentro das chaves "{}" 
se a condição for verdadeira. A sintaxe básica é a seguinte:

if (condicao) {
    // Bloco de código a ser executado se a condição for verdadeira
  }


*/

//exemplo :

let x = 10;

if (x > 5) {
    console.log("x é maior que 5");
}

//######################################################### IF ELSE ########################################################################  

/*


A condicional "if-else" verifica se uma condição é verdadeira e executa um bloco de código 
se a condição for verdadeira e outro bloco de código se a condição for falsa. A sintaxe básica é a seguinte:

if (condicao) {
    // Bloco de código a ser executado se a condição for verdadeira
  } else {
    // Bloco de código a ser executado se a condição for falsa
  }


*/

//exemplo:

let y = 3;

if (y > 5) {
    console.log("y é maior que 5");
} else {
    console.log("y é menor ou igual a 5");
}

//############################################################## SWITCH #####################################################################

/*


A condicional "switch" verifica uma expressão e executa um bloco de código com base no valor dessa expressão. 
A sintaxe básica é a seguinte:


switch (expressao) {
    case valor1:
      // Bloco de código a ser executado se a expressão for igual a valor1
      break;
    case valor2:
      // Bloco de código a ser executado se a expressão for igual a valor2
      break;
    default:
      // Bloco de código a ser executado se a expressão não for igual a nenhum dos valores
  }


*/
//exemplo:

let dia = "quarta-feira";

switch (dia) {
    case "segunda-feira":
        console.log("Hoje é segunda-feira");
        break;
    case "terça-feira":
        console.log("Hoje é terça-feira");
        break;
    case "quarta-feira":
        console.log("Hoje é quarta-feira");
        break;
    default:
        console.log("Hoje é outro dia");
}

//#######################################################################################################################################