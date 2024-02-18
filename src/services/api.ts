const api = "https://pokeapi.co/api/v2/pokemon";

export type Pokemon = {
  data: {
    name: string;
    url: string;
  };
  id: number;
};

export async function getData() {
  const res = await fetch(`${api}/?offset=0&limit=251`);
  const data = await res.json();

  data.results.forEach((dataItem: Pokemon, index: number) => {
    dataItem.id = index + 1;
  });

  return data.results;
}

export async function getPokemonData(pokemonName: string) {
  const res = await fetch(`${api}/${pokemonName}`);
  const data = await res.json();
  
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
  };
}

export async function getPokemonType(url: string): Promise<string> {
  const res = await fetch(url);
  const data = await res.json();
  return data.types[0].type.name;
}