import PokemonGrid from "../pokemons/components/PokemonGrid";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons favortios",
};

const PokemonsPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small>favoritos</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
};

export default PokemonsPage;
