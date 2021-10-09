import { Pokemon } from "../../../types/pokemon";
import Image from "next/image";
import styles from './PokemonList.module.css';

interface Props {
  searchedPokemon: {
    name: string;
    sprites: {
      front_default: string;
    };
    types: {
      type: {

        name: string
      }
      
    }[]
  };
}

export const PokemonList = ({ searchedPokemon }: Props) => {
  console.log(searchedPokemon)
  return (
    <div className="flex justify-center">
      {searchedPokemon ? (
      
        <div className="mt-12 bg-white rounded-3xl hover:scale-105 transform transition-all fade in p-12">
          <Image
            src={searchedPokemon.sprites.other.['official-artwork'].front_default}
            height="500"
            width="500"
          />
          <h1 className="font-bold uppercase text-center">{searchedPokemon.name}</h1>
          {searchedPokemon.types.map((type) => (
            <div className="uppercase text-center my-4">

            {type.type.name==='normal' ? <div className={styles.normal}>{type.type.name}</div> : ''}
            {type.type.name==='fire' ? <div className={styles.fire}>{type.type.name}</div> : ''}
            {type.type.name==='water' ? <div className={styles.water}>{type.type.name}</div> : ''}
            {type.type.name==='electric' ? <div className={styles.electric}>{type.type.name}</div> : ''}
            {type.type.name==='grass' ? <div className={styles.grass}>{type.type.name}</div> : ''}
            {type.type.name==='ice' ? <div className={styles.ice}>{type.type.name}</div> : ''}
            {type.type.name==='fighting' ? <div className={styles.fighting}>{type.type.name}</div> : ''}
            {type.type.name==='poison' ? <div className={styles.poison}>{type.type.name}</div> : ''}
            {type.type.name==='ground' ? <div className={styles.ground}>{type.type.name}</div> : ''}
            {type.type.name==='flying' ? <div className={styles.flying}>{type.type.name}</div> : ''}
            {type.type.name==='psychic' ? <div className={styles.psychic}>{type.type.name}</div> : ''}
            {type.type.name==='bug' ? <div className={styles.bug}>{type.type.name}</div> : ''}
            {type.type.name==='rock' ? <div className={styles.rock}>{type.type.name}</div> : ''}
            {type.type.name==='ghost' ? <div className={styles.ghost}>{type.type.name}</div> : ''}
            {type.type.name==='dragon' ? <div className={styles.dragon}>{type.type.name}</div> : ''}
            {type.type.name==='dark' ? <div className={styles.dark}>{type.type.name}</div> : ''}
            {type.type.name==='steel' ? <div className={styles.steel}>{type.type.name}</div> : ''}
            {type.type.name==='fairy' ? <div className={styles.fairy}>{type.type.name}</div> : ''}
            </div>
          ))}
        </div>
      ) : (<div className="flex h-screen mt-64">
        <h1 className="uppercase text-3xl text-red-600">Pokemon Not Found !</h1>
        </div>)}
    </div>
  );
};

export default PokemonList;
