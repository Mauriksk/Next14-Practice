import { PokemonsResponse, SimplePokemon } from "@/app/interfaces";
import Image from "next/image";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((poke) => (
          <Image
            key={poke.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
            width={100}
            height={100}
            alt={poke.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonsPage;
