import React ,{useEffect ,useState} from 'react';
import  { fetchPokemons }  from './fetchPokemones';
import  PokemonCard  from './card'
import './card.css'

const ParsePokemonData = (props) => {
  const [pokemons, setPkData] = useState([]);
  const url = props.url;
  useEffect(() => {
    fetchPokemons(url).then((data) => {
     const  pokemonData = {
        name: data.name,
        hight: data.height,
        weight:data.weight,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        imgUrl:data.sprites.other.dream_world.front_default,
      }
      setPkData(pokemonData);
    });
  },);
  return <PokemonCard {...pokemons} />
};

export default ParsePokemonData;
