import styles from "./home.module.css";
import Card from "@/components/card/card";
import { getData } from "@/services/pokemon-service";
import { PokemonType } from "@/types/pokemon-types";

export default async function Home() {
  const pokemons: PokemonType[] = await getData();

  return (
    <div className={styles.pokemons}>
      {pokemons?.map((pokemon: PokemonType, index: number) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}