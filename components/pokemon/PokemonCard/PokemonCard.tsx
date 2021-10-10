import React, { useContext } from "react";
import HeartIcon from "../../icons/HeartIcon";
import { LikedContext } from "../../liked/LikedStore";
import styles from "./PokemonCard.module.css";
import Image from "next/image";

interface Props {
  pokemon: {
    id: string;
    name: string;
    sprites: {
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    types?:
      | {
          type: {
            name: string;
          };
        }[];
  };
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { likePokemon, dislikePokemon, likedPokemonIds } =
    useContext(LikedContext);

  const likeOrDislikeThisPokemon = (id: string) => {
    if (likedPokemonIds.includes(id.toString())) {
      dislikePokemon(id);
    } else {
      likePokemon(id);
    }
  };
  return (
    <div className="mt-12 bg-white rounded-3xl  p-12">
      <div className="flex justify-end">
        <HeartIcon
          className="cursor-pointer"
          fill={
            likedPokemonIds && likedPokemonIds.includes(pokemon.id.toString())
              ? "red"
              : "none"
          }
          onClick={() => likeOrDislikeThisPokemon(pokemon.id)}
        />
      </div>
      <Image
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt="Image of a pokemon"
        height="500"
        width="500"
      />
      <h1 className="font-bold uppercase text-center">{pokemon.name}</h1>
      {pokemon.types &&
        pokemon.types.map((type) => (
          <div key={type.type.name} className="uppercase text-center my-4">
            {type.type.name === "normal" ? (
              <div className={styles.normal}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "fire" ? (
              <div className={styles.fire}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "water" ? (
              <div className={styles.water}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "electric" ? (
              <div className={styles.electric}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "grass" ? (
              <div className={styles.grass}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "ice" ? (
              <div className={styles.ice}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "fighting" ? (
              <div className={styles.fighting}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "poison" ? (
              <div className={styles.poison}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "ground" ? (
              <div className={styles.ground}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "flying" ? (
              <div className={styles.flying}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "psychic" ? (
              <div className={styles.psychic}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "bug" ? (
              <div className={styles.bug}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "rock" ? (
              <div className={styles.rock}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "ghost" ? (
              <div className={styles.ghost}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "dragon" ? (
              <div className={styles.dragon}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "dark" ? (
              <div className={styles.dark}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "steel" ? (
              <div className={styles.steel}>{type.type.name}</div>
            ) : (
              ""
            )}
            {type.type.name === "fairy" ? (
              <div className={styles.fairy}>{type.type.name}</div>
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
};

export default PokemonCard;
