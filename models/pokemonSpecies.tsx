export interface Language2 {
  name: string;
  url: string;
}

export interface Language4 {
  name: string;
  url: string;
}

export interface Genera {
  genus: string;
  language: Language4;
}

export interface Version {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language2;
  version: Version;
}
