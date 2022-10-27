import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonService } from '../service/service';

export default function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    PokemonService.getPokemonBy(name).then((res) => setPokemon(res));
  }, [name]);

  if (!pokemon) return <div className='pokemon'></div>;

  return (
    <div className='pokemon-details-wrapper'>
      <div className="pokemon-details">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.default} alt="" />
        <div className='pokemon-text'>{pokemon.flavor_text_entries[1].text}</div> 
      </div>
    </div>
  );
}
