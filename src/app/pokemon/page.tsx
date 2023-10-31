import { PokemonList } from "@/components/pokemonList";
import { pokemonApi } from "@/services/pokemonApi";
import { useEffect, useState } from "react";

const PokemonPage = async () => {
  //   const [pokemons, setPokemons] = useState<{}[]>();

  //   useEffect(() => {
  //     const getData = async () => {
  //       const result = await pokemonApi().getAll();
  //       setPokemons(result);
  //     };

  //     getData();
  //   }, []);
  const pokemons = await pokemonApi().getAll();

  return (
    <main className="">
      <PokemonList pokemons={pokemons} />
    </main>
  );
};

export default PokemonPage;
