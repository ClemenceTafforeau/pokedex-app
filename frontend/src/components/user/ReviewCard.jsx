import {Likes} from "./Likes.jsx";
import {ReviewInput} from "./ReviewInput.jsx";
import {useEffect, useState} from "react";
import {getAllReviews} from "../../api/api.js";
import {ReviewItem} from "./ReviewItem.jsx";
import {useLocation} from "react-router";

export function ReviewCard({pokemon}) {
    const [reviews, setReviews] = useState([]);

    // useEffect functions

    useEffect(() => {
        loadReviews().catch(error => {
            console.error('Failed to load reviews: ', error);
        });
    }, [pokemon]);

    // Getters and setters

    async function loadReviews() {
        try {
            const response = await getAllReviews(pokemon.id);
            setReviews(response);
        } catch (error) {
            console.error('Failed to load reviews: ', error);
        }
    }

    // Display functions

    function displayReviews() {
        const reviewsArray = [];

        reviews.map(review => {
            reviewsArray.push(<ReviewItem review={review}/>);
        })

        return reviewsArray;
    }

    function displayLoading() {
        return "Loading...";
    }

    return (
        <div className="h-full flex flex-col gap-8 w-1/4 max-h-[500px]">
            <div className="flex justify-between items-center text-sm">
                <p className="font-display text-xl">Reviews</p>
                <Likes pokemonId={pokemon.id} likes={pokemon.like}/>
            </div>
            <ReviewInput placeholder={"Add a review and press Enter to submit"}/>
            <ul className="flex flex-col gap-4 overflow-y-scroll">
                {pokemon ? displayReviews() : displayLoading()}
            </ul>
        </div>
    )
}