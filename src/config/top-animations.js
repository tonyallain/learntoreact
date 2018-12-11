import FLASHLIGHT from './flashlight_configs';
import KNIFE from './knife_configs';
import HANDGUN from './handgun_configs';
import SHOTGUN from './shotgun_configs';
import RIFLE from './rifle_configs';

const WEAPONS = [FLASHLIGHT, KNIFE, HANDGUN, SHOTGUN, RIFLE];

export const getWeaponConfig = (weaponId, animId) => {
    const weaponArray = WEAPONS[weaponId];
    const animConfig = weaponArray[animId];
    return animConfig;
};
