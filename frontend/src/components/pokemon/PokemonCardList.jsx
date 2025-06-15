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
        <ul className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
            {pokemons ? displayCardItems() : "Loading..."}
        </ul>
    )
}