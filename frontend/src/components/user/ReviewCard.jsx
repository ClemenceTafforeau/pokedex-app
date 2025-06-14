import {Likes} from "./Likes.jsx";
import {ReviewInput} from "./ReviewInput.jsx";
import {useState} from "react";

export function ReviewCard({pokemon}) {
    return (
        <div className="h-full flex flex-col gap-8 w-1/4">
            <div className="flex justify-between items-center text-sm">
                <p className="font-display text-xl">Reviews</p>
                <Likes pokemonId={pokemon.id} likes={pokemon.like}/>
            </div>
            <ReviewInput/>
        </div>
    )
}