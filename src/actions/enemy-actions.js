import { addEnemy, enemyStep } from '../utils/helpers';
import { getNextFrame } from '../utils/animator';

export const actionTypes = {
    ENEMY_ANIMATE: 'enemy-animate',
    ENEMY_ATTACK: 'enemy-attack',
    ENEMY_DIE: 'enemy-die',
    ENEMY_SPAWN: 'enemy-spawn',
    ENEMY_MOVE: 'enemy-move'
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

export const moveEnemy = (id, source, dest, deltaTime, speed) => {
    const newPos = enemyStep(source, dest, deltaTime, speed);

    return {
        type: actionTypes.ENEMY_MOVE,
        payload: {
            id: id,
            x: newPos[0],
            y: newPos[1],
            r: newPos[2]
        }
    };
};
