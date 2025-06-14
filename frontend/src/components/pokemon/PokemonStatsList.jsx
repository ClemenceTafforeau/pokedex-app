import {displayTypes} from "../../utils/usePokemonTypes.jsx";
import {PokemonStatsItem} from "./PokemonStatsItem.jsx";
import {usePokemonStatsMapping} from "../../utils/useMapping.js";

export function PokemonStatsList({pokemon}) {
    const mappedStats = usePokemonStatsMapping(pokemon.base);

    function displayStats() {
        const stats = [];

        Object.entries(mappedStats).map(([key, value]) => {
            stats.push(<PokemonStatsItem key={key} stat={value}/>);
        });

        return stats;
    }

    return (
        <div className="flex flex-col gap-8 w-1/4">
            <div className="flex justify-between items-center">
                <h1 className="font-display text-2xl">{pokemon.name}</h1>
                {displayTypes(pokemon)}
            </div>
            <div className="flex flex-col gap-2">
                {displayStats()}
            </div>
        </div>
    )
}