import { Link, useHistory } from "react-router-dom";

function BaseStats({ pokemon }) {
  return (
    <div
      key={pokemon.id}
      className={`background ${pokemon.types
        .map((type) => `${type.type.name}-type`)
        .join(" ")}`}
    >
      <div className="specific_pokemon_top">
        <div
          className="px-12 w-4 arrow_left cursor-pointer"
          onClick={() => (window.location.href = `/`)}
        >
          {" "}
          {`\u2190`}
        </div>
        <div className="flex items-center justify-between px-12">
          <div>
            <h2 className="mb-5 text-5xl font-bold text-white">
              {pokemon.name}
            </h2>
          </div>

          <div
            key={pokemon.id}
            id={`pokemon-${pokemon.id.toString().padStart(3, "0")}`}
            className={`text-5xl text-white font-semibold ${pokemon.types
              .map((type) => `${type}-color`)
              .join(" ")}`}
          >
            #{pokemon.id.toString().padStart(3, "0")}
          </div>
        </div>
        <ul className="gap-2 px-12 specific_buttons flex text-white">
          {" "}
          {pokemon.types.map((type, index) => (
            <li className="px-5 py-2 specific_button" key={index}>
              {type.type.name}
            </li>
          ))}
        </ul>
        <img
          className="specific_pokemon_img"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="specific_pokemon_bottom flex flex-col ">
        <div className="flex w-full justify-center ">
          <ul className="flex w-1/2 justify-evenly mt-16 border-b border-gray-300 h-12  ">
            <Link
              to={`/evolutions/${pokemon.name}`}
              className="flex  w-1/2 justify-center text-gray-400 "
            >
              About
            </Link>
            <Link
              to={`/pokemon/${pokemon.id}/base-stats`}
              className=" w-1/2 flex font-bold border-b-4 border-indigo-500  justify-center"
            >
              Base Stats
            </Link>
          </ul>
        </div>
        <div className="p-9 flex flex-col items-center ">
          <div className="my-2 w-3/5 flex overflow-hidden flex items-center gap-10">
            <p className="w-24 text-sm font-semibold text-gray-400">HP</p>
            <p className="w-12 text-sm font-semibold text-gray-600">
              {pokemon.stats[0].base_stat}
            </p>
            <div className="max-w-screen-xl relative w-full h-1.5 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                style={{ width: `${pokemon.stats[0].base_stat}%` }}
              ></div>
            </div>
          </div>
          <div className="my-2 w-3/5 flex overflow-hidden flex items-center gap-10">
            <p className="text-sm font-semibold text-gray-400 w-24">Attack</p>
            <p className=" w-12 text-sm font-semibold text-gray-600">
              {pokemon.stats[1].base_stat}
            </p>
            <div className="max-w-screen-xl relative w-full h-1.5 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                style={{ width: `${pokemon.stats[1].base_stat}%` }}
              ></div>
            </div>
          </div>
          <div className="my-2 w-3/5 flex overflow-hidden flex items-center gap-10">
            <p className=" overflow-hidden flex items-center gap-10 w-24 text-gray-400">
              Defense
            </p>
            <p className=" w-12 overflow-hidden flex items-center gap-10">
              {pokemon.stats[2].base_stat}
            </p>
            <div className=" max-w-screen-xl relative w-full h-1.5 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                style={{ width: `${pokemon.stats[2].base_stat}%` }}
              ></div>
            </div>
          </div>
          <div className="my-2 w-3/5 flex overflow-hidden flex items-center gap-10">
            <p className="overflow-hidden flex items-center gap-10 w-24 text-gray-400">
              Sp. Atk
            </p>
            <p className="w-12 overflow-hidden flex items-center gap-10">
              {pokemon.stats[2].base_stat}
            </p>
            <div className="max-w-screen-xl relative w-full h-1.5 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                style={{ width: `${pokemon.stats[2].base_stat}%` }}
              ></div>
            </div>
          </div>
          <div className="my-2 w-3/5 flex overflow-hidden flex items-center gap-10">
            <p className="overflow-hidden flex items-center gap-10 w-24 text-gray-400">
              Sp. Def
            </p>
            <p className="w-12 overflow-hidden flex items-center gap-10">
              {pokemon.stats[4].base_stat}
            </p>
            <div className=" max-w-screen-xl relative w-full h-1.5 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                style={{ width: `${pokemon.stats[4].base_stat}%` }}
              ></div>
            </div>
          </div>
          <div className="my-2 w-3/5 flex overflow-hidden flex items-center gap-10">
            <p className="overflow-hidden flex items-center gap-10 w-24 text-gray-400">
              Speed
            </p>
            <p className="w-12 overflow-hidden flex items-center gap-10">
              {pokemon.stats[5].base_stat}
            </p>
            <div className="max-w-screen-xl relative w-full h-1.5 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                style={{ width: `${pokemon.stats[5].base_stat}%` }}
              ></div>
            </div>
          </div>
          <div className="my-2 w-3/5 flex overflow-hidden flex items-center gap-10">
            <p className="overflow-hidden flex items-center gap-10 w-24 text-gray-400">
              Total
            </p>
            <p className=" w-12 overflow-hidden flex items-center gap-10">
              {pokemon.stats[0].base_stat +
                pokemon.stats[1].base_stat +
                pokemon.stats[2].base_stat +
                pokemon.stats[3].base_stat +
                pokemon.stats[4].base_stat +
                pokemon.stats[5].base_stat}
            </p>
            <div className="max-w-screen-xl relative w-full h-1.5 bg-gray-200 rounded-full">
              <div
                className="  absolute top-0 left-0 h-full bg-green-500 rounded-full"
                style={{
                  width: `${
                    (pokemon.stats[0].base_stat +
                      pokemon.stats[1].base_stat +
                      pokemon.stats[2].base_stat +
                      pokemon.stats[3].base_stat +
                      pokemon.stats[4].base_stat +
                      pokemon.stats[5].base_stat) /
                    6
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseStats;
