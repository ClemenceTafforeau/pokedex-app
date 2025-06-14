const baseUrl = import.meta.env.VITE_API_URL;

export function getPkmnImgUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
}

export async function getAllPkmns() {
    const url = `${baseUrl}pokemons`;

    try {
        const response = await fetch(url);
        if (response.ok) {

            return await response.json();
        }
    } catch (error) {
        console.error(error.message);
    }
}

export async function getPkmn(id) {
    const url = `${baseUrl}pokemons/${id}`;

    try {
        const response = await fetch(url);
        if (response.ok) {

            return await response.json();
        }
    } catch (error) {
        console.error(error.message);
    }
}

export async function updatePkmn(id, content) {
    const url = `${baseUrl}pokemons/${id}`;
}

export async function getAllReviews(id) {
    const url = `${baseUrl}reviews/?pokemonId=${id}`;
}

export async function postReview(review) {
    const url = `${baseUrl}reviews/`;
    const body = JSON.stringify(review);
}