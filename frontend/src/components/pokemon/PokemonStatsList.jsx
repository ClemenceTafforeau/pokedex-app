import {displayTypes, getTypeColor} from "../../utils/usePokemonTypes.jsx";
import {PokemonStatsItem} from "./PokemonStatsItem.jsx";
import {capitalizedToLowerCase, usePokemonStatsMapping} from "../../utils/useMapping.js";

export function PokemonStatsList({pokemon}) {
    const mappedStats = usePokemonStatsMapping(pokemon.base);
    const type = capitalizedToLowerCase(pokemon.types).join('-');
    const color = getTypeColor(type);

    function displayStats() {
        const stats = [];

        Object.entries(mappedStats).map(([key, value]) => {
            stats.push(<PokemonStatsItem key={key} stat={value} color={color}/>);
        });

        return stats;
    }

    return (
        <div className="flex flex-col gap-8 2xl:w-1/4 flex-1 max-w-96 h-full">
            <div className="flex flex-col gap-4 2xl:flex-row 2xl:gap-0 justify-between">
                <h1 className="font-display text-2xl">{pokemon.name}</h1>
                <div className="flex flex-row 2xl:flex-col 2xl:items-end gap-2">
                    {displayTypes(pokemon)}
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-end">
                {displayStats()}
            </div>
        </div>
    )
}