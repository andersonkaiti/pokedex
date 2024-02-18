import Card from "@/components/card";
import styles from "@/styles/Home.module.css";
import { getData, type Pokemon } from "@/services/api";

export default async function Home() {
  const pokemons: Pokemon[] = await getData();

  return (
    <div className={styles.pokemons}>
      {pokemons?.map((pokemon: Pokemon, index: number) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}