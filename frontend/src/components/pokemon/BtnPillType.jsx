import {PKMN_TYPES} from "../../constants/pokemonConstants.js";

export function BtnPillType({type}) {
    const pkmnType = PKMN_TYPES.find(t => t.name === type.toLowerCase());
    console.log(pkmnType);
    const color = pkmnType.color;

    return (
        <div className={`rounded-full px-3 py-1 bg-[${color}] w-fit text-sm text-zinc-700`}>
            <p className="p-0 text-zinc-700 font-bold text-shadow-xs">{type}</p>
        </div>
    )
}