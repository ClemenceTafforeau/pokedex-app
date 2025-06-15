import {ArrowUp} from "lucide-react";

export function ScrollTopBtn({scrollY, onClickScroll}) {
    return (
        <button onClick={onClickScroll}
                type="button"
                className={`fixed bottom-8 right-8 rounded-full border border-zinc-600 appearance-none bg-zinc-700 w-fit p-3 hover:bg-zinc-200 hover:text-zinc-700 cursor-pointer transition ease-in-out duration-500 ${scrollY > 1200 ? 'translate-y-0' : 'translate-y-24' }`}>
            <ArrowUp/>
        </button>
    )
}