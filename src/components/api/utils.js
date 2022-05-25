/**
 * Fetches first 50 Pokemon and returns an array of objects,
 * where each object represents a Pokemon.
 *
 * @returns {Array.<{
 *   name: string,
 *   url: string
 * }>}
 */
export async function getPokemonList() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`
  ).then((res) => res.json());
  return data.results;
}

/**
 * @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription(id) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  ).then((res) => res.json());

  return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}
