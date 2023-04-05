/*
######################## SOBRE O DODIGO ###########################
Este código busca uma lista de Pokémon da API e os exibe em uma lista HTML no navegador, 
usando a função 'convertPokemonToLi'  para converter cada Pokémon em HTML.

###################################################################




Esta é a declaração da função 'convertPokemonToLi', que recebe um objeto pokemon como parâmetro. 
Esta função é responsável por converter as informações desse objeto em uma string HTML. 
*/
function convertPokemonToLi(pokemon){
    /*
    Este é o template de string que contém a estrutura HTML que será criada para cada Pokémon.
     Ele usa a interpolação de string ${} para inserir o nome do Pokémon dentro do elemento span com a classe name,
     e também no atributo alt da imagem.
    */
    return `
    
    <li class="pokemon">
        <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}" >
        </div>
    <li>
`
    
}
/*
Esta linha seleciona o elemento do HTML com o ID 'pokemonList' e o armazena na variável 'pokemonList'.
*/
const pokemonList = document.getElementById('pokemonList')

/*
Este é o início do código, onde a função getPokemons é chamada no objeto pokeApi para 
obter uma lista de todos os Pokémons disponíveis na API.
O método .then() é usado para lidar com a resposta da API, 
que é um array de objetos Pokémon.
##########
pokeApi.getPokemons().then((pokemons = []) => {
##########


Esta linha de código cria uma nova variável chamada newHtml, que é definida como uma lista HTML de todos os Pokémons usando
a função convertPokemonToLi para converter cada objeto Pokémon em uma string HTML. A função map() 
é usada para percorrer o array de Pokémons e aplicar a função convertPokemonToLi em cada um, 
retornando um novo array de strings HTML.
Em seguida, o método join() é usado para unir todas as strings HTML em uma única string.
##########
const newHtml = pokemons.map(convertPokemonToLi).join('')
##########


Finalmente, a lista HTML de todos os Pokémons é adicionada ao elemento HTML com o ID pokemonList definido no documento. 
A propriedade innerHTML é usada para definir o conteúdo do elemento como a lista HTML criada anteriormente.

##########
pokemonList.innerHTML = newHtml
##########

 */
pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})

    