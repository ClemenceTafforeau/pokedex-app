import {useParams} from "react-router";
import {Navigation as NavigationComponent} from "../components/shared/Navigation.jsx";
import {getPkmn, getPkmnImgUrl} from "../api/api.js";
import {useEffect, useState} from "react";
import {FullScreenBgImg} from "../components/shared/FullScreenBgImg.jsx";
import {PokemonStatsList} from "../components/pokemon/PokemonStatsList.jsx";
import {ReviewCard} from "../components/user/ReviewCard.jsx";

export function PokemonDetailPage() {
    const [pokemon, setPokemon] = useState(null);

    const params = useParams();
    const pokemonId = params.id;
    const url = getPkmnImgUrl(pokemonId);

    // useEffects

    useEffect(() => {
        loadPkmn().catch(error => {
            console.error('Failed to load Pokemon: ', error);
        });
    }, []);

    // Getters and setters

    async function loadPkmn() {
        const response = await getPkmn(pokemonId);
        setPokemon(response);
    }

    // Display functions

    function displayMainContent() {
        return <div className="flex justify-between items-center w-full">
            <PokemonStatsList pokemon={pokemon}/>
            <div className="flex justify-center">
                <img src={url} alt={pokemon.name}/>
            </div>
            <ReviewCard pokemon={pokemon}/>
        </div>
    }

    function displayLoading() {
        return "Loading...";
    }

    return (
        <main className="px-8 py-4 max-w-[1536px] mx-auto mb-24 mt-18 flex flex-col gap-6 flex-1">
            <NavigationComponent id={pokemonId}/>
            <FullScreenBgImg path="/img/pokeball_bg.svg" alt=""/>
            <div className="flex justify-between items-center w-full h-full">
                { pokemon ? displayMainContent() : displayLoading() }
            </div>
        </main>
    )
}