import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

function App(){

const[pokemonList, setPokemonList] = useState([])
const[selectedPokemon, setSelectedPokemon] = useState(1)

  async function getPokemonList(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await res.json()

    getPokemonDetails(data.results)
    function getPokemonDetails(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()

        setPokemonList( currentList => [...currentList, data])
      })
    } 
  }

 useEffect(() => {
  getPokemonList()
 }, [])

function updateSummary(id) {
  setSelectedPokemon(id)
}

function pokemonElements() {

  function compareById(a, b) {
    return a.id - b.id;
  }

  pokemonList.sort(compareById);
  return pokemonList.map( (stats, index) => 
  <Pokemon
    key={index}
    id={stats.id}
    image={stats.sprites.other.home.front_default}
    icon={stats.sprites.front_default}
    name={stats.name}
    type={stats.types[0].type.name}
    handleFocus={updateSummary}
  />)
}
  return (
    <div id="pokemon--wrapper">
      <div id="pokemon--summary">
        <img id="pokemon--big-image" alt="picture of the selected Pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon}.png`} />
      </div>
      <div id="pokemon--pokelist">
          { pokemonElements() }
      </div>
    </div>
  );
}

export default App;