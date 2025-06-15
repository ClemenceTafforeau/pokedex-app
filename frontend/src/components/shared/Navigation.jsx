import {Link, useLocation} from "react-router";
import {useEffect, useState} from "react";
import {ROUTES} from "../../router/routes.js";
import {MAX_PKMN_ID, MIN_PKMN_ID} from "../../constants/pokemonConstants.js";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";

export function Navigation({id}) {
    const location = useLocation();
    const [previous, setPrevious] = useState(Number(id) - 1);
    const [next, setNext] = useState(Number(id) + 1);

    // useEffect

    useEffect(() => {
        setNavigation();
    }, [location]);

    // Getters and setters

    function setNavigation() {
        if (Number(id) === MIN_PKMN_ID) {
            setPrevious(id);
            setNext(Number(id) + 1);
        } else if (Number(id) === MAX_PKMN_ID) {
            setPrevious(Number(id) - 1);
            setNext(id);
        } else {
            setPrevious(Number(id) - 1);
            setNext(Number(id) + 1);
        }
    }

    // Display functions

    function displayLinks() {
        return <div className="flex justify-between rounded-md border border-zinc-600 text-zinc-400 px-2 w-full">
            <Link to={ROUTES.PKMN_DETAIL.replace(':id', String(previous))}
                  className="h-10 cursor-pointer flex justify-center items-center gap-2"
                  style={Number(id) === MIN_PKMN_ID ? {pointerEvents: "none"} : null}
            >
                <CircleChevronLeft color="oklch(55.2% 0.016 285.938)" size="24"/>
                <p>Previous</p>
            </Link>
            <Link to={ROUTES.PKMN_DETAIL.replace(':id', String(next))}
                  className="h-10 cursor-pointer flex justify-center items-center gap-2"
                  style={Number(id) === MAX_PKMN_ID ? {pointerEvents: "none"} : null}
            >
                <p>Next</p>
                <CircleChevronRight color="oklch(55.2% 0.016 285.938)" size="24"/>
            </Link>
        </div>
    }

    return (
        displayLinks()
    )
}