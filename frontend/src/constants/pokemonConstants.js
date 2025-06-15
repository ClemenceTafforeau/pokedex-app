export const PKMN_TYPES = Object.freeze([
    { name: "normal", color: "#A8A77A", shadow: `bg-[#A8A77A]` },
    { name: "fighting", color: "#C22E28", shadow: `bg-[#C22E28]` },
    { name: "flying", color: "#A98FF3", shadow: `bg-[#A98FF3]` },
    { name: "poison", color: "#A33EA1", shadow: `bg-[#A33EA1]` },
    { name: "ground", color: "#E2BF65", shadow: `bg-[#E2BF65]` },
    { name: "rock", color: "#B6A136", shadow: `bg-[#B6A136]` },
    { name: "bug", color: "#A6B91A", shadow: `bg-[#A6B91A]` },
    { name: "ghost", color: "#735797", shadow: `bg-[#735797]` },
    { name: "steel", color: "#B7B7CE", shadow: `bg-[#B7B7CE]` },
    { name: "fire", color: "#EE8130", shadow: `bg-[#EE8130]` },
    { name: "water", color: "#6390F0", shadow: `bg-[#6390F0]` },
    { name: "grass", color: "#7AC74C", shadow: `bg-[#7AC74C]` },
    { name: "electric", color: "#F7D02C", shadow: `bg-[#F7D02C]` },
    { name: "psychic", color: "#F95587", shadow: `bg-[#F95587]` },
    { name: "ice", color: "#96D9D6", shadow: `bg-[#96D9D6]` },
    { name: "dragon", color: "#6F35FC", shadow: `bg-[#6F35FC]` },
    { name: "dark", color: "#705746", shadow: `bg-[#705746]` },
    { name: "fairy", color: "#D685AD", shadow: `bg-[#D685AD]` },
    { name: "unknown", color: "#68A090", shadow: `bg-[#68A090]` },
    { name: "shadow", color: "#705898", shadow: `bg-[#705898]` },
    { name: "grass-poison", color: "", shadow: `bg-[linear-gradient(45deg,_#7AC74C,_#A33EA1)]` },
    { name: "fire-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#EE8130,_#A98FF3)]` },
    { name: "bug-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#A6B91A,_#A98FF3)]` },
    { name: "bug-poison", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#A6B91A,_#A33EA1)]` },
    { name: "normal-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#A8A77A,_#A98FF3)]` },
    { name: "poison-ground", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#A33EA1,_#E2BF65)]` },
    { name: "normal-fairy", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#A8A77A,_#D685AD)]` },
    { name: "poison-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#A33EA1,_#A98FF3)]` },
    { name: "bug-grass", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#A6B91A,_#7AC74C)]` },
    { name: "water-fighting", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#6390F0,_#C22E28)]` },
    { name: "water-poison", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#6390F0,_#A33EA1)]` },
    { name: "rock-ground", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#B6A136,_#E2BF65)]` },
    { name: "water-psychic", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#6390F0,_#F95587)]` },
    { name: "electric-steel", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#F7D02C,_#B7B7CE)]` },
    { name: "water-ice", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#6390F0,_#96D9D6)]` },
    { name: "ghost-poison", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#735797,_#A33EA1)]` },
    { name: "grass-psychic", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#7AC74C,_#F95587)]` },
    { name: "ice-psychic", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#96D9D6,_#F95587)]` },
    { name: "psychic-fairy", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#F95587,_#D685AD)]` },
    { name: "water-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#6390F0,_#A98FF3)]` },
    { name: "rock-water", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#B6A136,_#6390F0)]` },
    { name: "rock-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#B6A136,_#A98FF3)]` },
    { name: "ice-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#96D9D6,_#A98FF3)]` },
    { name: "electric-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#F7D02C,_#A98FF3)]` },
    { name: "dragon-flying", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#6F35FC,_#A98FF3)]` },
    { name: "ground-rock", color: "#705898", shadow: `bg-[linear-gradient(45deg,_#E2BF65,_#B6A136)]` },
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