import {getAllPkmns} from "../api/api.js";
import {useEffect, useState} from "react";
import {PokemonCardList} from "../components/pokemon/PokemonCardList.jsx";
import {SearchBar} from "../components/search/SearchBar.jsx";
import {ScrollTopBtn} from "../components/shared/ScrollTopBtn.jsx";
import {scrollToTop} from "../utils/useScroll.js";
import {FullScreenBgImg} from "../components/shared/FullScreenBgImg.jsx";

export function HomePage() {
    const [pokemons, setPokemons] = useState(null);
    const [filteredPokemons, setFilteredPokemons] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [scrollY, setScrollY] = useState(0);
    const [hasNoResult, setHasNoResult] = useState(false);

    // useEffect

    useEffect(() => {
        loadPkmns().catch(error => {
            console.error('Failed to load Pokemons: ', error);
        });
    }, []);

    useEffect(() => {
        filterPokemons();
    }, [searchValue]);

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScrollY);
        }
        watchScroll();
        return () => {
            window.addEventListener("scroll", handleScrollY);
        }
    })

    // Getters and setters

    async function loadPkmns() {
        const response = await getAllPkmns();
        setPokemons(response);
    }

    function filterPokemons() {
        if (searchValue !== '') {
            const withMatchingName = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
            const withMatchingType = pokemons.filter(pokemon => isMatchingType(pokemon.types, searchValue))

            const filteredPokemons = new Set(withMatchingName.concat(withMatchingType));

            if (filteredPokemons.size > 0) {
                setHasNoResult(false);
                setFilteredPokemons(Array.from(filteredPokemons));
            } else {
                setHasNoResult(true);
            }
        } else {
            loadPkmns().catch(error => {
                console.error('Failed to load Pokemons: ', error);
                setHasNoResult(true);
            });
        }
    }

    function handleSearch(value) {
        setSearchValue(value);
    }

    function handleScrollY() {
        setScrollY(window.scrollY);
    }

    // Validation functions

    function isMatchingType(types, searchValue) {
        return types.some((type) => type.toLowerCase().includes(searchValue.toLowerCase()));
    }

    // Display functions

    function getPkmnList(items) {
        return <PokemonCardList pokemons={items}/>
    }

    function getHasNoResultText() {
        return <div>
            <p className="text-lg flex flex-wrap gap-2">
                <span>No Pokemon found for your search criteria:</span>
                <span className="font-bold">{searchValue}</span>
            </p>
            <FullScreenBgImg path="/img/empty_pokeball.svg" alt="" minWidth="300px"/>
        </div>
    }

    function displaySearchBar() {
        return <SearchBar placeholder={"Filter the Pokemon list by name or type"} onSearchChange={handleSearch}/>
    }

    function displayLoading() {
        return "Loading...";
    }

    function displayMainContent() {
        if (searchValue !== '') {
            if (hasNoResult) {
                return getHasNoResultText();
            } else if (filteredPokemons) {
                return getPkmnList(filteredPokemons);
            }
        } else {
            if (hasNoResult) {
                setHasNoResult(false);
            }
            return getPkmnList(pokemons);
        }
    }

    return (
        <main className="px-6 min-[500px]:px-8 py-4 w-full lg:max-w-[1280px] 2xl:max-w-[1536px] mx-auto mb-24 mt-18 flex flex-col gap-6 relative">
            <div>
                {pokemons ? displaySearchBar() : displayLoading()}
            </div>
            <div>
                {pokemons ? displayMainContent() : displayLoading()}
            </div>
            <ScrollTopBtn scrollY={scrollY} onClickScroll={scrollToTop}/>
        </main>

    )
}