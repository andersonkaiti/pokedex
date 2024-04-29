export type PokemonType = {
    name: string;
    url: string;
    id?: number;
}

export type PokemonListType = {
    count: number;
    next: string;
    previous: number | null;
    results: PokemonType[];
};

export type Types = {
    slot: number;
    type: {
    name: string;
    url: string;
    };
}

export type PokemonDataType = {
    id: number;
    name: string;
    height: number;
    weight: number;
    url: string;
    types: Types[];
}