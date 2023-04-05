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
Esta é a parte principal do código.
 Ele usa a função getPokemons() do objeto pokeApi para obter uma lista de objetos Pokémon.
 Em seguida, ele chama o método map na lista de Pokémon para chamar a função convertPokemonToLi 
 para cada um e criar uma lista de strings HTML correspondentes. Finalmente, ele usa o método join para unir todas as strings
 em uma única string HTML e insere essa string como o conteúdo do elemento pokemonList usando a propriedade innerHTML.

 */
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

    