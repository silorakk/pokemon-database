import { useEffect, useState } from "react";
import PokemonList from "../components/pokemon/PokemonList/PokemonList";
import SearchPokemon from "../components/search/SearchPokemon";
import { Pokemon } from "../types/pokemon";

export const getStaticProps = async () => {
  const pokemon = [];

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=899");
  const data = await res.json();

  pokemon.push(data.results);
  return {
    props: {
      pokemon: pokemon.flat(),
    },
  };
};

interface SearchProps {
  pokemon: Pokemon[];
}

export default function Search({ pokemon }: SearchProps) {
  const [search, setSearch] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  console.log(search);

  const fetchPokemon = async (poke) => {
    const res = await fetch(poke.url);
    const pokemonFound = await res.json();
    setSearchedPokemon(pokemonFound);
  };

  useEffect(() => {
    const poke = pokemon.find((poke) => poke.name == search);

    if (poke) {
      fetchPokemon(poke);
    } else {
      setSearchedPokemon(null);
    }
  }, [search]);
  return (
    <div className="h-screen">
      <SearchPokemon pokemon={pokemon} setSearch={setSearch} />
      <PokemonList searchedPokemon={searchedPokemon} />
    </div>
  );
}
