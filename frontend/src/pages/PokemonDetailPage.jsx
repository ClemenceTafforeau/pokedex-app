import {useLocation, useParams} from "react-router";
import {Navigation as NavigationComponent} from "../components/shared/Navigation.jsx";
import {getPkmn, getPkmnImgUrl} from "../api/api.js";
import {useEffect, useState} from "react";
import {PokemonStatsList} from "../components/pokemon/PokemonStatsList.jsx";
import {ReviewCard} from "../components/user/ReviewCard.jsx";

export function PokemonDetailPage() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const params = useParams();
    const pokemonId = params.id;
    const url = getPkmnImgUrl(pokemonId);

    // useEffect

    useEffect(() => {
        if (!loading) {
            setLoading(true);
        }
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, [location])

    useEffect(() => {
        loadPkmn().catch(error => {
            console.error('Failed to load Pokemon: ', error);
        });
    }, [location]);

    // Getters and setters

    async function loadPkmn() {
        const response = await getPkmn(pokemonId);
        setPokemon(response);
    }

    // Display functions

    function displayMainContent() {
        return (
            <div className="w-full flex flex-col gap-16 justify-center items-center flex-1">
                <div key={pokemon.name}
                     className={`xl:hidden relative flex mx-auto justify-center items-center h-full flex-1 max-h-[400px] max-w-[320px] my-auto transition ease-in-out duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                    <img src={url} alt={pokemon.name} className="my-auto h-full"/>
                    <img src="/img/pokeball_bg.svg" alt="" className="absolute inset-0 opacity-10 -z-10"/>
                </div>
                <div
                    className="flex flex-col md:flex-row gap-12 justify-around xl:justify-between flex-1 items-center md:items-start xl:items-center w-full md:h-[500px] md:gap-0">
                    <PokemonStatsList pokemon={pokemon}/>
                    <div key={pokemon.name}
                         className={`relative hidden xl:flex justify-center items-center h-full flex-1 max-h-[400px] max-w-[320px] my-auto transition ease-in-out duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                        <img src={url} alt={pokemon.name} className="my-auto h-full"/>
                        <img src="/img/pokeball_bg.svg" alt="" className="absolute left-0 right-0 top-1/2 -translate-y-1/2 opacity-10 -z-10"/>
                    </div>
                    <ReviewCard pokemon={pokemon}/>
                </div>
            </div>
        )
    }

    function displayLoading() {
        return "Loading...";
    }

    return (
        <main
            className="px-6 md:px-8 py-4 w-full lg:max-w-[1280px] 2xl:max-w-[1536px] mx-auto mb-24 mt-18 flex flex-col gap-6 flex-1">
            <NavigationComponent id={pokemonId}/>
            <div className="flex justify-between items-center w-full h-full flex-1">
                {pokemon ? displayMainContent() : displayLoading()}
            </div>
        </main>
    )
}