import { Pokemon } from "@/types/pokemon";
import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const pokemonApi = () => {
  const getAll = async () => {
    const { data } = await axios.get(`${baseUrl}?limit=151&offset=0`);

    const results = await Promise.all(
      data?.results.map((dto: any) => {
        return getByName(dto.name);
      })
    );

    return results;
  };

  const getByName = async (name: string) => {
    try {
      if (!name) return null;
      const { data } = await axios.get(`${baseUrl}/${name}`);
      const res = {
        id: data.id,
        name: data.name,
        sprite: data.sprites?.other["official-artwork"].front_default,
      } as Pokemon;
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return { getAll, getByName };
};
