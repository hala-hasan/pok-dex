import React ,{useEffect ,useState} from 'react';
import  { fetchPokemons }  from './components/fetchPokemones';
import  ParsePokemonData  from './components/parseData'
import './App.css';

const App = () => {
  const [allPokemons, setAllPk] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  useEffect(() => {
    fetchPokemons(url).then((data) => {
      setAllPk(data.results);
    });
  }, []);

  return (
    <div>
        <h1 className='title'>pokédex</h1>
      <div className='wrapper'>
        {
         allPokemons.map((pokemon, index) => {
          return <ParsePokemonData key={index} {...pokemon} />;
        })}
      </div>
    </div>
  );
};

export default App;