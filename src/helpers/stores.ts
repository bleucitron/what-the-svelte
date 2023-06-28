import { writable } from 'svelte/store';

import type { User } from './user';

export type Pokemon = {
  id: number;
  name: string;
};

export const player = writable<User>();
export const pokemons = writable<Pokemon[]>([]);
export const catched = writable([1]);
export const detailedCaught = writable<{ [id: number]: Pokemon }>({});
