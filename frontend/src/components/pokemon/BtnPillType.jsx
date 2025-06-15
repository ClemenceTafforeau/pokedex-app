import {getTypeColor} from "../../utils/usePokemonTypes.jsx";

export function BtnPillType({type}) {
    return (
        <div className={`rounded-full px-3 py-1 bg-[${getTypeColor(type)}] w-fit text-sm text-zinc-700`}>
            <p className="p-0 text-zinc-700 font-bold text-shadow-xs">{type}</p>
        </div>
    )
}