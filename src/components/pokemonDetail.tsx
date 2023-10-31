import { Pokemon } from "@/types/pokemon";
import { PokemonImage } from "./pokemonImage";

export const PokemonDetail = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h1>
      <div
        className="m-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage image={pokemon.sprite} name={pokemon.name} />
      </div>
    </>
  );
};
