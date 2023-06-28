import { get } from 'svelte/store';
import { player } from '../../helpers/stores';
import { json } from '@sveltejs/kit';

export function GET() {
  console.log('Player', get(player));

  return json({});
}
