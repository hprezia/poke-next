import { PokemonDetail } from "@/components/pokemonDetail";
import { pokemonApi } from "@/services/pokemonApi";
import { Pokemon } from "@/types/pokemon";

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await pokemonApi().getByName(params.id);

  if (!pokemon) return <p>Ocorreu um erro inesperado</p>;

  return (
    <main className="">
      <PokemonDetail pokemon={pokemon as Pokemon} />
    </main>
  );
};

export default PokemonPage;
