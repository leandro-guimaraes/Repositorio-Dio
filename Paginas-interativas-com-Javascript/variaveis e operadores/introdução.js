/*
Em JavaScript, as variáveis são declaradas usando a palavra-chave "var", "let" ou "const", 
seguida do nome da variável e opcionalmente, um valor inicial. Por exemplo:
*/

var numero = 10; // variável "numero" recebe o valor 10
let texto = "Olá"; // variável "texto" recebe o valor "Olá"
const pi = 3.14; // variável "pi" é constante e recebe o valor 3.14


/*
Os operadores em JavaScript são divididos em várias categorias,
incluindo operadores aritméticos, operadores de atribuição, operadores de comparação,
operadores lógicos e operadores ternários.

Operadores Aritméticos:
*/ 

var soma = 10 + 5; // soma é 15
var subtracao = 10 - 5; // subtração é 5
var multiplicacao = 10 * 5; // multiplicação é 50
var divisao = 10 / 5; // divisão é 2
var resto = 10 % 5; // resto é 0

/*
Operadores de Atribuição:
*/

var x = 10;
x += 5; // x é 15
x -= 5; // x é 10 novamente
x *= 2; // x é 20
x /= 2; // x é 10 novamente
x %= 3; // x é 1  resto da divisão

/*
Operadores de Comparação:
*/

var a = 10;
var b = 5;
console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // true
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // false

/*
Operadores Lógicos:
*/
var a = true;
var b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

/*
Operador Ternário:
*/
var idade = 18;
var status = (idade >= 18) ? "adulto" : "menor";
console.log(status); // adulto
