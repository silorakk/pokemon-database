import React, { useContext, useEffect, useState } from "react";
import { LikedContext } from "../components/liked/LikedStore";
import PokemonCard from "../components/pokemon/PokemonCard/PokemonCard";
import { useRouter } from "next/router";

interface Pokemon {
  id: string;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export default function Liked() {
  const { likedPokemonIds } = useContext(LikedContext);
  const Router = useRouter();

  const [likedPokemons, setLikedPokemons] = useState<Pokemon[]>();

  const getLikedPokemons = async (ids: string[]) => {
    const pokemons = [];

    for (let i = 0; i < ids.length; i++) {
      const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${ids[i]}`);
      const data = await url.json();
      pokemons.push(data);
    }

    setLikedPokemons(pokemons);
  };
  useEffect(() => {
    getLikedPokemons(likedPokemonIds);
  }, [likedPokemonIds.length]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="h-screen">
        <h1 className="text-center font-bold text-3xl">Your Liked Pokemon</h1>
        <div className="grid grid-cols-2 gap-12">
          {likedPokemons?.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
