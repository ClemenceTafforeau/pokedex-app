import {PokemonCardItem} from "./PokemonCardItem.jsx";

export function PokemonCardList({pokemons}) {

    const displayCardItems = () => {
        const items = [];

        pokemons.map(pokemon => {
            items.push(<PokemonCardItem key={pokemon.id} pokemon={pokemon}/>);
        });

        return items;
    }

    return (
        <ul className="grid grid-cols-6 gap-8">
            {pokemons ? displayCardItems() : "Loading..."}
        </ul>
    )
}