import React from 'react';
import { PokemonList } from '../cmps/PokemonList';
import { useEffect, useState, createContext, useContext } from 'react';
import { PokemonService } from '../service/service';
import TextField from '@mui/material/TextField';

export default function Home({ favorites, setFavorites }) {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState('');
   

  // const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    PokemonService.getPokemons(page, searchText).then((res) => {setPokemons(res.results)
    setAllPokemons(res.results)} );
  }, [page, searchText]);

  const setToFavorites = (pokemon) => {
    if (favorites.includes(pokemon)) return;
    setFavorites([...favorites, pokemon]);  
    console.log(favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const removeFavorites = (pokemonName) => {
    setFavorites(favorites.filter((pokemon) => pokemon.name !== pokemonName));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const filterPokemons = () => {
    let text = document.getElementById('searchText').value;
    // setSearchText(text);
    var searchRes = allPokemons.filter((pokemon) => pokemon.name.startsWith(text));
    setPokemons(searchRes);
    console.log(searchRes);
  };

  const changePageUp = () => {
    setPage(page + 1);
  };

  const changePageDown = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  if (!pokemons.length) return <TextField className="text-filed" type="text" id="searchText" onChange={() => filterPokemons()} label="Search Your Pokemon" variant="outlined" />; 

  return (
    <div className="main-app-container">
      <TextField className="text-filed" type="text" id="searchText" onChange={() => filterPokemons()} label="Search Your Pokemon" variant="outlined" />
      <PokemonList removeFavorites={removeFavorites} setToFavorites={setToFavorites} changePageUp={changePageUp} changePageDown={changePageDown} pokemons={pokemons} page={page} />
    </div>
  );
}
