import {
    WEAPON_HANDGUN,
    WEAPON_SHOTGUN,
    WEAPON_RIFLE
} from '../utils/constants';

export const getMuzzleSettings = id => {
    switch (id) {
        case WEAPON_HANDGUN:
            return { x: 24, y: -3, scale: 0.75 };
        case WEAPON_SHOTGUN:
            return { x: 55, y: -3, scale: 1.2 };
        case WEAPON_RIFLE:
            return { x: 65, y: -10, scale: 0.5 };
        default:
            return { x: 0, y: 0 };
    }
};
