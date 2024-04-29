import { type PokemonDataType, type PokemonListType, type PokemonType } from "@/types/pokemon-types";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export async function getData(): Promise<PokemonType[]> {
  const result = await fetch(`${baseUrl}/?offset=0&limit=251`);
  const data: PokemonListType = await result.json();

  data.results.forEach((pokemon: PokemonType, index: number) => {
    pokemon.id = index + 1;
  });

  return data.results as PokemonType[];
}

export async function getPokemonData(pokemonName: string): Promise<PokemonDataType> {
  const result = await fetch(`${baseUrl}/${pokemonName}`);
  const data = await result.json();
  
  const {
    id,
    name,
    height,
    weight,
    forms: [{ url }],
    types
  } = data;

  return {
    id,
    name,
    height,
    weight,
    url,
    types
  } as PokemonDataType;
}

export async function getPokemonType(url: string): Promise<string> {
  const result = await fetch(url);
  return (await result.json()).types[0].type.name as string;
}