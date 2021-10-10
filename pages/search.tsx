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
  const [searchedPokemon, setSearchedPokemon] = useState();
  console.log(search);

  const fetchPokemon = async (poke: Pokemon) => {
    const res = await fetch(poke.url);
    const pokemonFound = await res.json();
    setSearchedPokemon(pokemonFound);
  };

  useEffect(() => {
    const poke = pokemon.find((poke) => poke.name == search);

    if (poke) {
      fetchPokemon(poke);
    }
  }, [search]);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="h-screen">
        <SearchPokemon setSearch={setSearch} />
        <PokemonList searchedPokemon={searchedPokemon && searchedPokemon} />
      </div>
    </main>
  );
}
