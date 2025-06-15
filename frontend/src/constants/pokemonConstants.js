export const PKMN_TYPES = Object.freeze([
    { name: "normal", color: "#A8A77A" },
    { name: "fighting", color: "#C22E28" },
    { name: "flying", color: "#A98FF3" },
    { name: "poison", color: "#A33EA1" },
    { name: "ground", color: "#E2BF65" },
    { name: "rock", color: "#B6A136" },
    { name: "bug", color: "#A6B91A" },
    { name: "ghost", color: "#735797" },
    { name: "steel", color: "#B7B7CE" },
    { name: "fire", color: "#EE8130" },
    { name: "water", color: "#6390F0" },
    { name: "grass", color: "#7AC74C" },
    { name: "electric", color: "#F7D02C" },
    { name: "psychic", color: "#F95587" },
    { name: "ice", color: "#96D9D6" },
    { name: "dragon", color: "#6F35FC" },
    { name: "dark", color: "#705746" },
    { name: "fairy", color: "#D685AD" },
    { name: "unknown", color: "#68A090" },
    { name: "shadow", color: "#705898" },
    { name: "grass-poison", color: "linear-gradient(45deg, #7AC74C, #A33EA1)" },
    { name: "fire-flying", color: "linear-gradient(45deg, #EE8130, #A98FF3)" },
    { name: "bug-flying", color: "linear-gradient(45deg, #A6B91A, #A98FF3)" },
    { name: "bug-poison", color: "linear-gradient(45deg, #A6B91A, #A33EA1)" },
    { name: "normal-flying", color: "linear-gradient(45deg, #A8A77A, #A98FF3)" },
    { name: "poison-ground", color: "linear-gradient(45deg, #A33EA1, #E2BF65)" },
    { name: "normal-fairy", color: "linear-gradient(45deg, #A8A77A, #D685AD)" },
    { name: "poison-flying", color: "linear-gradient(45deg, #A33EA1, #A98FF3)" },
    { name: "bug-grass", color: "linear-gradient(45deg, #A6B91A, #7AC74C)" },
    { name: "water-fighting", color: "linear-gradient(45deg, #6390F0, #C22E28)" },
    { name: "water-poison", color: "linear-gradient(45deg, #6390F0, #A33EA1)" },
    { name: "rock-ground", color: "linear-gradient(45deg, #B6A136, #E2BF65)" },
    { name: "water-psychic", color: "linear-gradient(45deg, #6390F0, #F95587)" },
    { name: "electric-steel", color: "linear-gradient(45deg, #F7D02C, #B7B7CE)" },
    { name: "water-ice", color: "linear-gradient(45deg, #6390F0, #96D9D6)" },
    { name: "ghost-poison", color: "linear-gradient(45deg, #735797, #A33EA1)" },
    { name: "grass-psychic", color: "linear-gradient(45deg, #7AC74C, #F95587)" },
    { name: "ice-psychic", color: "linear-gradient(45deg, #96D9D6, #F95587)" },
    { name: "psychic-fairy", color: "linear-gradient(45deg, #F95587, #D685AD)" },
    { name: "water-flying", color: "linear-gradient(45deg, #6390F0, #A98FF3)" },
    { name: "rock-water", color: "linear-gradient(45deg, #B6A136, #6390F0)" },
    { name: "rock-flying", color: "linear-gradient(45deg, #B6A136, #A98FF3)" },
    { name: "ice-flying", color: "linear-gradient(45deg, #96D9D6, #A98FF3)" },
    { name: "electric-flying", color: "linear-gradient(45deg, #F7D02C, #A98FF3)" },
    { name: "dragon-flying", color: "linear-gradient(45deg, #6F35FC, #A98FF3)" },
    { name: "ground-rock", color: "linear-gradient(45deg, #E2BF65, #B6A136)" },
]);

// (minimum being 0)

export const MAX_STAT = {
    attack: 130,
    defense: 180,
    specialAttack: 135,
    specialDefense: 120,
    speed: 120,
    hp: 105,
};

export const MIN_PKMN_ID = 1;

export const MAX_PKMN_ID = 151;

export const DEFAULT_AUTHOR = "Me";