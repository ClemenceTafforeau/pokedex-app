import {Link} from "react-router";
import {ROUTES} from "../../router/routes.js";
import {getPkmnImgUrl} from "../../api/api.js";
import {displayTypes} from "../../utils/usePokemonTypes.jsx";

export function PokemonCardItem({pokemon}) {
    const url = getPkmnImgUrl(pokemon.id);

    return (
        <li className="w-full justify-self-center">
            <Link to={ROUTES.PKMN_DETAIL.replace(':id', pokemon.id)}
                  className="flex flex-col gap-4 p-4 rounded-md border border-gray-200">
                <div className="flex justify-end">
                    <span className="rounded-full px-3 py-1 bg-gray-100 w-fit text-sm before:content-['#'] before:pr-1 font-display">{pokemon.id}</span>
                </div>
                <div className="flex justify-center">
                    <img src={url} alt={pokemon.name} className="h-32"/>
                </div>
                <h2 className="font-display text-center">{pokemon.name}</h2>
                <hr className="border-gray-200"/>
                <div className="flex gap-2 justify-end">
                    {displayTypes(pokemon)}
                </div>
            </Link>
        </li>
    )
}