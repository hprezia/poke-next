import Link from "next/link";
import { PokemonImage } from "./pokemonImage";
import { Pokemon } from "@/types/pokemon";

// export const PokemonCard = ({ name }: { name: string }) => {
export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Link
      href={`pokemon/${pokemon.name}`}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={pokemon.id}
    >
      <div style={{ position: "relative", width: "150px", height: "150px" }}>
        <PokemonImage image={pokemon.sprite} name={pokemon.name} />
      </div>
      <h2 className={`text-2xl font-semibold`}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      <p>#{pokemon.id}</p>
    </Link>
  );
};
