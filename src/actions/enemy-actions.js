import { addEnemy, enemyStep } from '../utils/helpers';
import { getNextFrame } from '../utils/animator';
import { distance } from '../utils/vector';
import store from '../store';
import { DAMAGE_TABLE, RANGE_TABLE } from '../config/weapon-damage';
import { enemyAnimStates, resetEnemy } from '../utils/helpers';

export const actionTypes = {
    ENEMY_ANIMATE: 'enemy-animate',
    ENEMY_ATTACK: 'enemy-attack',
    ENEMY_DIE: 'enemy-die',
    ENEMY_SPAWN: 'enemy-spawn',
    ENEMY_MOVE: 'enemy-move',
    ENEMY_DAMAGED: 'enemy-damaged'
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

export const enemyDie = (id, enemyProps) => {
    const resetValues = resetEnemy();

    return {
        type: actionTypes.ENEMY_DIE,
        payload: {
            [id]: {
                ...enemyProps,
                a: -1,
                hp: 100,
                x: resetValues.position.x,
                y: resetValues.position.y,
                speed: resetValues.speed
            }
        }
    };
};

export const moveEnemy = (id, enemyProps, dest, deltaTime) => {
    const newPos = enemyStep(
        [enemyProps.x, enemyProps.y],
        dest,
        deltaTime,
        enemyProps.speed
    );

    if (enemyProps.hp <= 0) {
        return {
            type: actionTypes.ENEMY_MOVE,
            payload: {
                [id]: {
                    ...enemyProps
                }
            }
        };
    } else {
        const shouldAttack = newPos[3];
        return {
            type: actionTypes.ENEMY_MOVE,
            payload: {
                [id]: {
                    ...enemyProps,
                    x: newPos[0],
                    y: newPos[1],
                    r: newPos[2],
                    a: shouldAttack
                        ? enemyAnimStates.ATTACK
                        : enemyAnimStates.MOVE
                }
            }
        };
    }
};

export const takeDamage = (id, enemyProps) => {
    const playerInfo = store.getState().player;
    const currentWeapon = playerInfo.currentWeapon;
    const amount = DAMAGE_TABLE.LEFT[currentWeapon];
    const maxRange = RANGE_TABLE.LEFT[currentWeapon];
    const position = playerInfo.position;
    const delta = distance(position, [enemyProps.x, enemyProps.y]);

    let newProps = { ...enemyProps };
    if (delta <= maxRange) {
        newProps = { ...enemyProps, hp: enemyProps.hp - amount };

        if (enemyProps.hp - amount < 0) {
            return enemyDie(id, enemyProps);
        } else {
            return {
                type: actionTypes.ENEMY_DAMAGED,
                payload: { [id]: newProps }
            };
        }
    } else {
        return {
            type: actionTypes.ENEMY_DAMAGED,
            payload: { [id]: newProps }
        };
    }
};
