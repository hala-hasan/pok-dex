
export const fetchPokemons  = (URL) => {
  return fetch(URL).then((response) => response.json());
};