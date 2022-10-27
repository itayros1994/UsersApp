import React, { useEffect, useState , useContext} from 'react';
import { PokemonPreview } from '../cmps/PokemonPreview';

export default function Favorites() {
  const [favoritesPokemons, setFavoritesPokemons] = useState([])

  useEffect(() => {
    setFavoritesPokemons(JSON.parse(localStorage.getItem('favorites')));
  }, []);

  if (!favoritesPokemons) return <div className="pokemon"></div>;

  return (
    <div className="center">
      <h1>Favorites</h1>
      <div className="pokemons-list">
        {favoritesPokemons.map((pokemon) => {
          return <PokemonPreview pokemon={pokemon} isFavorites={true} />;
        })}
      </div>
    </div>
  );
}
