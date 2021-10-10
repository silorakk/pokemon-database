import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import PokemonCard from "../../components/pokemon/PokemonCard/PokemonCard";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface Props {
  pokemon: {
    id: string;
    name: string;
    sprites: {
      front_default: string;
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
  };
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function Pokemon({ pokemon }: Props) {
  console.log(pokemon);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="h-screen">
        {pokemon && (
          <>
            <div className="flex space-x-12">
              <PokemonCard pokemon={pokemon} noDetails={true} />
              <div className="mt-12 bg-white rounded-3xl p-12 w-full">
                <h1 className="uppercase font-bold text-xl pb-4">Stats</h1>
                <div>
                  {pokemon.stats.map((stat) => (
                    <div key={stat.stat.name}>
                      <h1 className="uppercase">{stat.stat.name}</h1>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-500">
                          <div
                            style={{ width: `${stat.base_stat / 2}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                          >
                            {stat.base_stat}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link
                href={`/pokemon/${Math.floor(Math.random() * 899) + 1}`}
                passHref
              >
                <button className="bg-black rounded-3xl mt-2 p-4 uppercase text-gray-300 border-red-500">
                  Show Random Pokemon
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
