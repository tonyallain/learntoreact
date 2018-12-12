import {
    WEAPON_FLASHLIGHT,
    WEAPON_HANDGUN,
    WEAPON_KNIFE,
    WEAPON_RIFLE,
    WEAPON_SHOTGUN
} from '../utils/constants';

export const DAMAGE_TABLE = {
    LEFT: {
        [WEAPON_FLASHLIGHT]: 10,
        [WEAPON_KNIFE]: 10,
        [WEAPON_HANDGUN]: 3,
        [WEAPON_SHOTGUN]: 9,
        [WEAPON_RIFLE]: 6
    },
    RIGHT: {
        [WEAPON_HANDGUN]: 1,
        [WEAPON_SHOTGUN]: 2,
        [WEAPON_RIFLE]: 3,
        [WEAPON_FLASHLIGHT]: 10,
        [WEAPON_KNIFE]: 10
    }
};

export const RANGE_TABLE = {
    LEFT: {
        [WEAPON_FLASHLIGHT]: 25,
        [WEAPON_KNIFE]: 25,
        [WEAPON_HANDGUN]: 700,
        [WEAPON_SHOTGUN]: 400,
        [WEAPON_RIFLE]: 1000
    },
    RIGHT: {
        [WEAPON_HANDGUN]: 25,
        [WEAPON_SHOTGUN]: 25,
        [WEAPON_RIFLE]: 25,
        [WEAPON_FLASHLIGHT]: 25,
        [WEAPON_KNIFE]: 25
    }
};
