import axios from 'axios';

export const PokemonService = {
  getPokemons,
  getPokemonsImg,
  getPokemonBy,
};

function getPokemons(page, filterBy) {
  if (filterBy === '') {
    return axios.get(`https://pokeapi.co/api/v2/item/?offset=${page}&limit=20`).then((res) => res.data);
  } else {
    return axios.get(`https://pokeapi.co/api/v2/item/?offset=${page}&limit=20`).then((res) => res.data.results.filter((pokemon) => pokemon.name.includes(filterBy)));
  }
}

function getPokemonsImg(pokemonUrl) {
  return axios.get(`${pokemonUrl}`).then((res) => res.data);
}

function getPokemonBy(params) {
  return axios.get(`https://pokeapi.co/api/v2/item/${params}`).then((res) => res.data);
}
