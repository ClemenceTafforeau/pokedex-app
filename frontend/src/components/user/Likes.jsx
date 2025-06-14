import {HeartPlus} from "lucide-react";
import {useEffect, useState} from "react";
import {updatePkmn} from "../../api/api.js";

export function Likes({pokemonId, likes}) {
    const [likesAmount, setLikesAmount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setLikesAmount(likes);
    }, [pokemonId]);

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
            <button type="button" onClick={updateLikesAmount} disabled={isDisabled} className="flex justify-center items-center text-white rounded-full bg-red-500 flex gap-2 w-10 h-10 cursor-pointer">
                <HeartPlus color="white"/>
            </button>
            <div className="flex justify-center items-center rounded-full w-10 h-10 border border-gray-200">
                <p>{likesAmount}</p>
            </div>
        </div>
    )
}