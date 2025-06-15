import {Likes} from "./Likes.jsx";
import {ReviewInput} from "./ReviewInput.jsx";
import {useEffect, useRef, useState} from "react";
import {getAllReviews, postReview} from "../../api/api.js";
import {ReviewItem} from "./ReviewItem.jsx";
import {CircleAlert} from "lucide-react";
import {DEFAULT_AUTHOR} from "../../constants/pokemonConstants.js";

export function ReviewCard({pokemon}) {
    const [reviews, setReviews] = useState([]);
    const reviewsList = useRef(null);
    const [errors, setErrors] = useState({});

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

    async function addReview(value) {
        const review = {
            author: DEFAULT_AUTHOR,
            content: value,
            pokemonId: pokemon.id,
        };

        try {
            const response = await postReview(review);
            if (response) {
                setReviews([...reviews, response]);
                setTimeout(() => {
                    reviewsList.current.scrollTo({top: reviewsList.current.scrollHeight, behavior: "smooth"});
                }, 200);
            }
        } catch (error) {
            setErrors(errors => ({...errors, default: "Something went wrong, please try again."}));
            console.error('Failed to post new review: ', error);
        }
    }

    async function getInputErrorMessage(key, value) {
        if (value !== '') {
            setErrors(errors => ({...errors, [key]: value}));
        } else {
            const newErrors = Object.entries(errors).filter(error => {
                !error[0].includes(key);
            });
            setErrors(newErrors);
        }
    }

    // Display functions

    function displayReviews() {
        const reviewsArray = [];

        reviews.map(review => {
            reviewsArray.push(<ReviewItem key={review.id} review={review}/>);
        })

        if (reviewsArray.length === 0) {
            return <p className="text-sm text-zinc-400">There are no reviews for this Pokemon. Be the first to write one!</p>
        }

        return reviewsArray;
    }

    function displayLoading() {
        return "Loading...";
    }

    function displayErrors() {
        if (Object.keys(errors).length > 0) {
            const errorsArray = [];

            Object.entries(errors).map(([key, value]) => {
                errorsArray.push(<p key={key} className="text-sm text-red-500 flex gap-2 items-center">
                    <span><CircleAlert color="oklch(63.7% 0.237 25.331)" size="14"/></span>
                    <span>{value}</span>
                </p>);
            });

            return errorsArray;
        }
    }

    return (
        <div className="h-full flex flex-col gap-3 w-full md:w-[360px] 2xl:w-1/4 max-h-[500px]">
            <div className="flex justify-between items-center text-sm mb-4">
                <p className="font-display text-xl">Reviews</p>
                <Likes pokemonId={pokemon.id} likes={pokemon.like}/>
            </div>
            <ReviewInput placeholder={"Add a review and press Enter to submit"} onSubmit={addReview}
                         onError={getInputErrorMessage}/>
            <ul className="flex flex-col gap-1">
                {errors ? displayErrors() : null}
            </ul>
            <div className="px-3 py-3 rounded-md bg-zinc-600 h-fit">
                <ul ref={reviewsList}
                    className="flex flex-col gap-4 overflow-y-scroll h-[320px] pr-1">
                    {pokemon ? displayReviews() : displayLoading()}
                </ul>
            </div>
        </div>
    )
}