import React, { useEffect, useState, createContext } from 'react';
import { PokemonService } from '../service/service';
import { Link } from 'react-router-dom';

export function PokemonPreview({ pokemon, setToFavorites, isFavorites, removeFavorites }) {
  const [pokemonImg, setPokemonImg] = useState('');

  useEffect(() => {
    PokemonService.getPokemonsImg(pokemon.url).then((res) => setPokemonImg(res.sprites.default));
  }, [pokemon]);

  return (
    <div>
      <Link to={`/details/${pokemon.name}`}>
        <div className="pokemon-preview">
          <div className="pokemon-name">{pokemon.name}</div>
          <img src={pokemonImg} alt="pokemon-img" />
        </div>
      </Link>
      <div className="favorite-btn">
        <button onClick={() => setToFavorites(pokemon)}>Add To favorites</button>
      </div>
      <button onClick={() => removeFavorites(pokemon.name)} className={isFavorites ? 'block center' : 'hidden'}>
        Remove
      </button>
    </div>
  );
}
