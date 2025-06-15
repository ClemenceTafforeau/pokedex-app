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
    { name: "grass-poison", color: "linear-gradient(45deg,_#7AC74C,_#A33EA1)" },
    { name: "fire-flying", color: "linear-gradient(45deg,_#EE8130,_#A98FF3)" },
    { name: "bug-flying", color: "linear-gradient(45deg,_#A6B91A,_#A98FF3)" },
    { name: "bug-poison", color: "linear-gradient(45deg,_#A6B91A,_#A33EA1)" },
    { name: "normal-flying", color: "linear-gradient(45deg,_#A8A77A,_#A98FF3)" },
    { name: "poison-ground", color: "linear-gradient(45deg,_#A33EA1,_#E2BF65)" },
    { name: "normal-fairy", color: "linear-gradient(45deg,_#A8A77A,_#D685AD)" },
    { name: "poison-flying", color: "linear-gradient(45deg,_#A33EA1,_#A98FF3)" },
    { name: "bug-grass", color: "linear-gradient(45deg,_#A6B91A,_#7AC74C)" },
    { name: "water-fighting", color: "linear-gradient(45deg,_#6390F0,_#C22E28)" },
    { name: "water-poison", color: "linear-gradient(45deg,_#6390F0,_#A33EA1)" },
    { name: "rock-ground", color: "linear-gradient(45deg,_#B6A136,_#E2BF65)" },
    { name: "water-psychic", color: "linear-gradient(45deg,_#6390F0,_#F95587)" },
    { name: "electric-steel", color: "linear-gradient(45deg,_#F7D02C,_#B7B7CE)" },
    { name: "water-ice", color: "linear-gradient(45deg,_#6390F0,_#96D9D6)" },
    { name: "ghost-poison", color: "linear-gradient(45deg,_#735797,_#A33EA1)" },
    { name: "grass-psychic", color: "linear-gradient(45deg,_#7AC74C,_#F95587)" },
    { name: "ice-psychic", color: "linear-gradient(45deg,_#96D9D6,_#F95587)" },
    { name: "psychic-fairy", color: "linear-gradient(45deg,_#F95587,_#D685AD)" },
    { name: "water-flying", color: "linear-gradient(45deg,_#6390F0,_#A98FF3)" },
    { name: "rock-water", color: "linear-gradient(45deg,_#B6A136,_#6390F0)" },
    { name: "rock-flying", color: "linear-gradient(45deg,_#B6A136,_#A98FF3)" },
    { name: "ice-flying", color: "linear-gradient(45deg,_#96D9D6,_#A98FF3)" },
    { name: "electric-flying", color: "linear-gradient(45deg,_#F7D02C,_#A98FF3)" },
    { name: "dragon-flying", color: "linear-gradient(45deg,_#6F35FC,_#A98FF3)" },
    { name: "ground-rock", color: "linear-gradient(45deg,_#E2BF65,_#B6A136)" },
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