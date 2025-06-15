import {MAX_STAT} from "../constants/pokemonConstants.js";

export function usePokemonStatsMapping(stats) {
    const maxStat = MAX_STAT;
    const statsObj = {};

    Object.entries(stats).forEach((([key, value]) => {
        switch (key) {
            case ("HP"):
                statsObj.hp = {label: key, value: value, maxValue: maxStat.hp};
                break;
            case ("Attack"):
                statsObj.attack = {label: key, value: value, maxValue: maxStat.attack};
                break;
            case ("Defense"):
                statsObj.defense = {label: key, value: value, maxValue: maxStat.defense};
                break;
            case ("Special attack"):
                statsObj.specialAttack = {label: key, value: value, maxValue: maxStat.specialAttack};
                break;
            case ("Special defense"):
                statsObj.specialDefense = {label: key, value: value, maxValue: maxStat.specialDefense};
                break;
            case ("Speed"):
                statsObj.speed = {label: key, value: value, maxValue: maxStat.speed};
                break;
        }
    }));

    return statsObj;
}

export function capitalizedToLowerCase(values) {
    return values.map(value => value.toLowerCase());
}