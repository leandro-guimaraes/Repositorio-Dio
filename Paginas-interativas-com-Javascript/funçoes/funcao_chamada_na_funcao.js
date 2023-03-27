// função que recebe  o nome.
function escrevaMeuNome(nome){
    return 'Leandro ';
 }
 
 //função que verifica idade e chama a função nome para escreve -la junto no console.
 function verificarIdade(idade){
     if(idade >= 18){
         console.log('Pela sua idade '+ escrevaMeuNome() + 'de ' + idade + ' anos você é maior de idade');
     }
     else{
         console.log('Pela sua idade '+ escrevaMeuNome() + ' de ' + idade + ' anos você é menor de idade');
     }
 }
 
 verificarIdade(18);