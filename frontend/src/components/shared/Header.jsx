import {ROUTES} from "../../router/routes.js";
import {Link} from "react-router";

export function Header() {
    return (
        <header className="px-8 py-4 w-full fixed top-0 left-0 right-0 bg-[linear-gradient(180deg,rgba(63,_63,_70,_1)_64%,rgba(63,_63,_70,_0.39)_89%,rgba(63,_63,_70,_0)_100%)] h-24 z-50">
            <Link to={ROUTES.HOME} className="flex gap-4 items-center w-fit">
                <img src="/img/pokeball.png" alt="A pokeball" className="w-8 h-8"/>
                <img src="/img/pokedex.png" alt="Pokedex logo" className="h-10 w-auto"/>
            </Link>
        </header>
    )
}