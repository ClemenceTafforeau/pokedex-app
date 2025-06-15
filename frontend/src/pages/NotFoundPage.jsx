import {BtnPillType} from "../components/pokemon/BtnPillType.jsx";

export function NotFoundPage() {
    return (
        <main className="flex justify-center items-center w-full">
            <h1 className="flex flex-col justif-center items-center gap-4">
                <span className="text-xl">You found the rarest Pokemon!</span>
                <span className="text-3xl font-display">#404 Page not found</span>
                <BtnPillType type="Unknown"/>
            </h1>
            <img src="/img/empty_pokeball.svg"
                 alt=""
                 className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-5 object-cover xl:w-1/4 opacity-10 w-1/4`}/>
        </main>
    )
}