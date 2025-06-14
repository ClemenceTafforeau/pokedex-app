import {ROUTES} from "../../router/routes.js";
import {Link} from "react-router";

export function Header() {
    return (
        <header className="px-8 py-4 fixed top-0 left-0 right-0">
            <Link to={ROUTES.HOME} className="flex gap-4 items-center w-fit">
                <img src="/img/pokeball.png" alt="A pokeball" className="w-8 h-8"/>
                <img src="/img/pokedex.png" alt="Pokedex logo" className="h-10 w-auto"/>
            </Link>
        </header>
    )
}