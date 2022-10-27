import { PokemonPreview } from './PokemonPreview';

export function PokemonList({ pokemons, changePageUp, changePageDown, page, setToFavorites, removeFavorites }) {

  return (
    <div className="pokemons-list">
      <div className="page-cotainer">
        <div className="page-move" onClick={() => changePageUp()}>
        ➕ 
        </div>
        {page}
        <div className="page-move" onClick={() => changePageDown()}>
        ➖
        </div>
      </div>
      {pokemons.map((pokemon) => {
        return <PokemonPreview removeFavorites={removeFavorites} setToFavorites={setToFavorites} pokemon={pokemon} isFavorites={false} />;
      })}
    </div>
  );
}
