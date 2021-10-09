import { ReactFragment, useRef, useState } from "react";

interface Props {
  setSearch: (s: string) => void;
}

export const SearchPokemon = ({ setSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(inputRef.current?.value.toLowerCase() || "");

    if (inputRef.current && inputRef.current.value) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="bg-gray-800 p-2 rounded-xl text-white outline-none"
          placeholder="Search Pokemon..."
        ></input>
        <button type="submit" className="bg-red-600 p-2 rounded-xl text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPokemon;
