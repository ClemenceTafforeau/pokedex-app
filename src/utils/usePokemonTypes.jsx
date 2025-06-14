import {BtnPillType} from "../components/pokemon/BtnPillType.jsx";

export function displayTypes(pokemon) {
    const buttons = [];

    pokemon.types.map((type, index) => {
        buttons.push(<BtnPillType key={index} type={type}/>);
    });

    return buttons;
}