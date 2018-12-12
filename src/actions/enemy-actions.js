import { addEnemy } from '../utils/helpers';
import { getNextFrame } from '../utils/animator';

export const actionTypes = {
    ENEMY_ANIMATE: 'enemy-animate',
    ENEMY_ATTACK: 'enemy-attack',
    ENEMY_DIE: 'enemy-die',
    ENEMY_SPAWN: 'enemy-spawn'
};

export const animateEnemy = animProps => {
    const newFrame = getNextFrame(animProps);

    return {
        type: actionTypes.ENEMY_ANIMATE,
        payload: {
            ...animProps,
            ...newFrame
        }
    };
};

export const spawnEnemy = enemyProps => {
    const newState = addEnemy(enemyProps);

    return {
        type: actionTypes.ENEMY_SPAWN,
        payload: {
            ...newState
        }
    };
};
