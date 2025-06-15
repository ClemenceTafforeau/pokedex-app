import {BtnPillType} from "../components/pokemon/BtnPillType.jsx";
import {PKMN_TYPES} from "../constants/pokemonConstants.js";

export function displayTypes(pokemon) {
    const buttons = [];

    pokemon.types.map((type, index) => {
        buttons.push(<BtnPillType key={index} type={type}/>);
    });

    return buttons;
}

export function getTypeColor(type) {
    const pkmnType = PKMN_TYPES.find(t => t.name === type.toLowerCase());
    return pkmnType.color;
}