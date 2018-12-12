import {
    WEAPON_FLASHLIGHT,
    WEAPON_HANDGUN,
    WEAPON_KNIFE,
    WEAPON_RIFLE,
    WEAPON_SHOTGUN
} from '../utils/constants';

export const DAMAGE_TABLE = {
    LEFT: {
        [WEAPON_FLASHLIGHT]: 99,
        [WEAPON_KNIFE]: 49,
        [WEAPON_HANDGUN]: 6,
        [WEAPON_SHOTGUN]: 18,
        [WEAPON_RIFLE]: 12
    },
    RIGHT: {
        [WEAPON_HANDGUN]: 1,
        [WEAPON_SHOTGUN]: 2,
        [WEAPON_RIFLE]: 3,
        [WEAPON_FLASHLIGHT]: 99,
        [WEAPON_KNIFE]: 49
    }
};

export const RANGE_TABLE = {
    LEFT: {
        [WEAPON_FLASHLIGHT]: 150,
        [WEAPON_KNIFE]: 150,
        [WEAPON_HANDGUN]: 800,
        [WEAPON_SHOTGUN]: 600,
        [WEAPON_RIFLE]: 1000
    },
    RIGHT: {
        [WEAPON_HANDGUN]: 150,
        [WEAPON_SHOTGUN]: 150,
        [WEAPON_RIFLE]: 150,
        [WEAPON_FLASHLIGHT]: 150,
        [WEAPON_KNIFE]: 150
    }
};
