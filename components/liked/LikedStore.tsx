import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import parseJSON from "../../utils/parseJson";

const initialState = {
  likedPokemonIds: [] as string[],
  likePokemon: (id: string): void => undefined,
  dislikePokemon: (id: string): void => undefined,
};

export interface Store {
  likedPokemonIds: string[];
  likePokemon: (id: string) => void;
  dislikePokemon: (id: string) => void;
}

export const LikedContext = createContext(initialState);

interface LikedStoreProps {
  children: React.ReactNode;
}

export const LikedStore = ({ children }: LikedStoreProps) => {
  const [likedPokemonIds, setLikedPokemonIds] = useState<string[]>([]);

  const likePokemon = (id: string) => {
    if (!likedPokemonIds.includes(id.toString())) {
      setLikedPokemonIds([...likedPokemonIds, id]);
      Cookies.set("LIKED_POKEMONS", [...likedPokemonIds, id], {
        expires: 1865,
      });
    }
  };

  const dislikePokemon = (id: string) => {
    const newLikedPokemons = likedPokemonIds.filter(
      (pokeId) => pokeId !== id.toString()
    );

    setLikedPokemonIds(newLikedPokemons);
    Cookies.set("LIKED_POKEMONS", [...newLikedPokemons], {
      expires: 1865,
    });
  };

  const store: Store = {
    likedPokemonIds,
    likePokemon,
    dislikePokemon,
  };

  useEffect(() => {
    const pokemonCookie = Cookies.get("LIKED_POKEMONS");
    console.log(pokemonCookie);
    if (!pokemonCookie) {
      return;
    } else {
      const pokemonIds = pokemonCookie.split(",");
      setLikedPokemonIds(pokemonIds);
      console.log(likedPokemonIds);
    }
  }, [likedPokemonIds.length]);

  return (
    <LikedContext.Provider value={store}>{children}</LikedContext.Provider>
  );
};
