/*
const offset = 0
const limit = 10
*/
const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'

function convertPokemonToLi(pokemon){
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




const pokemonList = document.getElementById('pokemonList')


//codigo de consumo de api.
fetch(url)
    // Encadeamento de thens.
    //Foram utilizadas  funções de callback  que é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
    // Foram utilizadas arrow functions.
    //.then((response) => response.json())         estou transformando response em uma promessa do body convertido em json.
    //.then((jsonBody) =>console.log(jsonBody))    estou recebendo o body convertido e printando ele.
    //.catch((error) => console.error(error))

    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for(let i=0; i < pokemons.length; i++){
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    
    })
    .catch((error) => console.error(error))