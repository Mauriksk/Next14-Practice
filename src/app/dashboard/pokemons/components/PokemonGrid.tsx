import { SimplePokemon } from "@/app/interfaces";
import Image from "next/image";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((poke) => (
        
        <PokemonCard key={poke.id}/> 
      ))}
    </div>
  );
};

export default PokemonGrid;

{/* <Image
          key={poke.id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
          width={100}
          height={100}
          alt={poke.name}
        /> */}