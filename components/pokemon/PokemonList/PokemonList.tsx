import { Pokemon } from "../../../types/pokemon";
import Image from "next/image";
import styles from "./PokemonList.module.css";
import React, { useContext } from "react";
import HeartIcon from "../../icons/HeartIcon";
import { LikedContext } from "../../liked/LikedStore";
import PokemonCard from "../PokemonCard/PokemonCard";
import Link from "next/link";

interface Props {
  searchedPokemon?: {
    id: string;
    name: string;
    sprites: {
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    types:
      | {
          type: {
            name: string;
          };
        }[];
  };
  moreInfo?: boolean;
}

export const PokemonList = ({ searchedPokemon }: Props) => {
  return (
    <div className="flex justify-center flex-col">
      {searchedPokemon ? (
        <PokemonCard pokemon={searchedPokemon} />
      ) : (
        <div className="flex h-screen mt-64">
          <h1 className="uppercase text-3xl text-red-600">
            Pokemon Not Found !
          </h1>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
