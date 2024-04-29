import { getPokemonData, getPokemonType } from "@/services/pokemon-service";
import { type Types } from "@/types/pokemon-types";
import styles from "./pokemon.module.css";
import Image from "next/image";

type pokemonProps = {
    params: {
        pokemon: string;
    }
}

export default async function Pokemon({ params }: pokemonProps) {
    const pokemon = await getPokemonData(params.pokemon);
    const pokemonType = await getPokemonType(pokemon.url);
    
    return (
        <div className={styles.pokemonContainer}>
            <h1 className={`${styles.pokemonName} ${styles["type_" + pokemonType]}`}>{pokemon.name}</h1>
            <Image
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width="200"
                height="200"
                alt={pokemon.name}
            />
            <div className={styles.pokemonAbout}>
                <p className={styles.pokemonTitle}>Tipo</p>
                <div className={styles.pokemonType}>
                    {pokemon.types.map((data: Types, index: number) => (
                        <p className={`${styles["type_" + data.type.name]}`} key={index}>{data.type.name}</p>
                    ))}
                </div>
                <div className={styles.pokemonData}>
                    <div className={styles.pokemonWeight}>
                        <p>Peso</p>
                        {pokemon.weight / 10} kg
                    </div>
                    <div className={styles.pokemonHeight}>
                        <p>Altura</p>
                        {pokemon.height * 10} cm
                    </div>
                </div>
            </div>
        </div>
    );
}