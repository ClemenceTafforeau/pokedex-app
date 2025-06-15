import {useEffect, useState} from "react";
import {Link} from "react-router";
import {ROUTES} from "../../router/routes.js";
import {PKMN_TYPES} from "../../constants/pokemonConstants.js";
import {getPkmnImgUrl} from "../../api/api.js";
import {displayTypes} from "../../utils/usePokemonTypes.jsx";
import {capitalizedToLowerCase} from "../../utils/useMapping.js";

export function PokemonCardItem({pokemon}) {
    const [hover, setHover] = useState(false);
    const [currentShadow, setCurrentShadow] = useState("");

    const url = getPkmnImgUrl(pokemon.id);
    const lowerCaseType = capitalizedToLowerCase(pokemon.types);

    useEffect(() => {
        if (hover) {
            displayBoxShadow();
        } else {
            setCurrentShadow("");
        }
    }, [hover])

    // Display functions

    function displayBoxShadow() {
        let type = '';

        if (lowerCaseType.length > 1) {
            type = lowerCaseType.join('-');
        } else {
            type = lowerCaseType.join('');
        }

        const array = PKMN_TYPES.filter(t => t.name === type);
        setCurrentShadow(array.map(obj => obj.color));
    }

    return (
        <li
            className={`relative group isolate w-full justify-self-center rounded-md border border-zinc-600 scale-100 transition ease-in-out duration-300 rotate-z-0 hover:rotate-z-[2deg] hover:scale-105`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={`absolute z-0 -inset-1 blur-sm opacity-0 group-has-hover:opacity-100 transition ease-in-out duration-500 animate-pulse bg-[${currentShadow}]`}></div>
            <Link to={ROUTES.PKMN_DETAIL.replace(':id', pokemon.id)}
                  className="bg-zinc-700 flex flex-col gap-4 p-4 relative z-10 rounded-md">
                <div className="flex justify-end">
                    <span
                        className="rounded-full px-3 py-1 bg-zinc-100 w-fit text-sm before:content-['#'] before:pr-1 font-display border border-zinc-600 bg-zinc-700">{pokemon.id}</span>
                </div>
                <div className="flex justify-center">
                    <img src={url} alt={pokemon.name} className="h-32"/>
                </div>
                <h2 className="font-display text-center">{pokemon.name}</h2>
                <hr className="border-zinc-600"/>
                <div className="flex gap-2 justify-end">
                    {displayTypes(pokemon)}
                </div>
            </Link>
        </li>
    )
}