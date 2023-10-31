"use client";

import { Pokemon } from "@/types/pokemon";
import { PokemonCard } from "./pokemonCard";
import { FormEvent, useState } from "react";

export const PokemonList = ({ pokemons }: { pokemons: Pokemon[] }) => {
  const [filteredList, setFilteredList] = useState(pokemons);

  const filterList = (e: FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value.toLowerCase();
    const _filter = pokemons.filter((pkm) => {
      return pkm.name.toLowerCase().includes(term);
    });
    setFilteredList(_filter);
  };

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Busque seu pokemão!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="searchTerm">Pokemon</label>
          <input
            type="text"
            autoComplete="off"
            id="searchTerm"
            placeholder="Charizard, Pikachu, etc."
            onChange={filterList}
          />
        </div>
      </div>
      <input className="border-stone-950" onChange={filterList} />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-6 lg:text-left">
        {filteredList.map((pokemon: any) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};
