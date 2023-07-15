export interface IPokemonResults {
  name: string;
  url: string;
}

export interface IGetAllPokemonApi {
  count: number;
  next: string;
  previous: string;
  results: Array<IPokemonResults>;
}

export interface IGetPokemonApi {
  abilities: Array<any>;
  base_experience: number;
  forms: Array<any>;
  game_indices: Array<any>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: Object;
  sprites: IPokemonSprites;
  stats: Array<any>;
  types: Array<any>;
  weight: number;
}

export interface IPokemonSprites {
  back_default: string;
  back_female: String | null;
  back_shiny: string;
  back_shiny_female: String | null;
  front_default: string;
  front_female: String | null;
  front_shiny: string;
  front_shiny_female: String | null;
  other: Object;
  versions: Object;
}
