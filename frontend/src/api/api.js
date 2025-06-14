import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export function getPkmnImgUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
}

export async function getAllPkmns() {
    const url = `${baseUrl}pokemons`;

    try {
        const response = await axios.get(url);
        if (response) {

            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export async function getPkmn(id) {
    const url = `${baseUrl}pokemons/${id}`;

    try {
        const response = await axios.get(url);
        if (response) {

            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export async function updatePkmn(id, content) {
    const url = `${baseUrl}pokemons/${id}`;

    try {
        const response = await axios.patch(url, JSON.stringify(content));
        if (response) {

            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export async function getAllReviews(id) {
    const url = `${baseUrl}reviews/?pokemonId=${id}`;

    try {
        const response = await axios.get(url);
        if (response) {

            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}

export async function postReview(review) {
    const url = `${baseUrl}reviews/`;

    try {
        const response = await axios.post(url, JSON.stringify(review));
        if (response) {

            return response.data;
        }
    } catch (error) {
        console.error(error.message);
    }
}