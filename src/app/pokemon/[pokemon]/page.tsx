import { getPokemonData, getPokemonType } from "@/services/api";
import styles from "@/styles/Pokemon.module.css";
import Image from "next/image";

type pokemonProp = {
    params: {
        pokemon: string;
    }
}

export default async function Pokemon({ params }: pokemonProp) {
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
                    {pokemon.types.map((data: any, index: number) => (
                        <p className={`${styles["type_" + data.type.name]}`} key={index}>{data.type.name}</p>
                    ))}
                </div>
                <div className={styles.pokemonData}>
                    <p className={styles.pokemonWeight}>
                        <p>Peso</p>
                        {pokemon.weight / 10} kg
                    </p>
                    <p className={styles.pokemonHeight}>
                        <p>Altura</p>
                        {pokemon.height * 10} cm
                    </p>
                </div>
            </div>
        </div>
    )
}