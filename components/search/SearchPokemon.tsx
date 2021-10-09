import { useRef, useState } from "react";

export const SearchPokemon = ({ pokemon, setSearch }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputRef.current?.value.toLowerCase());
    inputRef.current.value = "";
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
