import { SimplePokemon } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            width={100}
            height={100}
            alt={name}
            priority={false}
          />

          <p className="capitalize pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemon/${id}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
            href="/dashboard/main"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>

       
      </div>
    </div>
  );
};

export default PokemonCard;
