import {CircleX} from "lucide-react";
import {useRef} from "react";

export function SearchBar({placeholder, onSearchChange}) {
    const search = useRef(null);

    function clearInput() {
        search.current.value = '';
        onSearchChange('');
    }

    return (
        <div className="relative w-full min-[500px]:w-fit ml-auto flex gap-2 items-center rounded-md border border-zinc-600 has-focus:border-zinc-600 transition ease-in-out duration-500">
            <input ref={search}
                   onChange={(e) => onSearchChange(e.target.value)}
                   type="text" placeholder={placeholder}
                   className="py-2 px-3 text-ellipsis w-full min-[500px]:min-w-96"/>
            <button type="button"
                    onClick={clearInput}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center">
                <CircleX color="oklch(70.5% 0.015 286.067)" size="20"/>
            </button>
        </div>
    )
}