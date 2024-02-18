import styles from "@/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

async function getPokemonType(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    return data.types[0].type.name;
}

export default async function Card({ pokemon }: any) {
    const pokemonType = await getPokemonType(pokemon.url);

    return (
        <div className={`${styles.card} ${styles["type_" + pokemonType]}`}>
            <div className={styles.pokemonData}>
                <h3>{pokemon.name}</h3>
                <p className={styles.cardId}>#{pokemon.id.toString().padStart(4, "0")}</p>
                <Link className={styles.button} href={`/pokemon/${pokemon.id}`}>
                    DETALHES
                </Link>
            </div>
            <div className={styles.pokemonImage}>
                <Image
                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    width="100"
                    height="100"
                    alt={pokemon.name}
                />
            </div>
        </div>
    )
}