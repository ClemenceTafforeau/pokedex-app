import {HeartPlus} from "lucide-react";
import {useEffect, useState} from "react";
import {updatePkmn} from "../../api/api.js";

export function Likes({pokemonId, likes}) {
    const [likesAmount, setLikesAmount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [dynamicColor, setDynamicColor] = useState("oklch(92% 0.004 286.32)");
    const [hover, setHover] = useState(false);

    // useEffect

    useEffect(() => {
        setLikesAmount(likes);
    }, [pokemonId]);

    useEffect(() => {
        if (hover) {
            setDynamicColor("oklch(92% 0.004 286.32)");
        } else {
            setDynamicColor("oklch(63.7% 0.237 25.331)");
        }
    }, [hover]);

    // Getters and Setters

    async function updateLikesAmount(e) {
        e.preventDefault();
        const sum = likesAmount + 1;
        setIsDisabled(true);

        try {
            const response = await updatePkmn(Number(pokemonId), {like: sum});
            setLikesAmount(response.like);
        } catch (error) {
            console.error('Failed to update likes: ', error);
        }

        setIsDisabled(false);
    }

    return (
        <div className="flex gap-2">
            <button type="button"
                    onClick={updateLikesAmount}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    disabled={isDisabled}
                    className="flex justify-center items-center rounded-full bg-zinc-700 hover:bg-red-500 border border-zinc-600 flex gap-2 w-10 h-10 cursor-pointer transition ease-in-out duration-300"
                    style={{ color: dynamicColor }}>
                <HeartPlus/>
            </button>
            <div className="flex justify-center items-center rounded-full w-10 h-10 border border-zinc-600">
                <p>{likesAmount}</p>
            </div>
        </div>
    )
}