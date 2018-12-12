import { angle, distance } from './vector';
import { ENEMY_MIN_RANGE, ENEMY_SPEED } from '../utils/constants';

export const enemyAnimStates = {
    DEAD: -1,
    IDLE: 0,
    MOVE: 1,
    ATTACK: 2
};
const edgeBuffer = 100;

export function getVariance(from, amount) {
    const randomSpeed = Math.random() * amount;
    const plusOrMinus = Math.random() <= 0.5 ? 1 : -1;
    const variance = from + randomSpeed * plusOrMinus;

    return variance;
}

export function spawnPosition() {
    // spawn at the top/bottom or left/right
    const topside = Math.random() <= 0.5; //top or sides
    const maximum = Math.random() <= 0.5; // on the 0 or inner* side

    let x, y;
    if (topside) {
        // we're going to random x along width
        x = Math.random() * window.innerWidth;
        // pick which side y is on
        y = maximum ? window.innerHeight + edgeBuffer : -edgeBuffer;
    } else {
        // we're going to random y along height
        y = Math.random() * window.innerHeight;
        // pick which side x is on
        x = maximum ? window.innerWidth + edgeBuffer : -edgeBuffer;
    }

    return { x, y };
}

export function resetEnemy() {
    const newSpawnLoc = spawnPosition();
    const newSpeed = Math.max(Math.random() * ENEMY_SPEED, ENEMY_SPEED / 4);

    return { position: newSpawnLoc, speed: newSpeed };
}

export function addEnemy(oldState) {
    const newId = Object.keys(oldState.enemies).length;
    const newSpawnLoc = spawnPosition();
    const randomFacing = Math.random() * 360;
    const newSpeed = Math.max(Math.random() * ENEMY_SPEED, ENEMY_SPEED / 4);

    const newEnemies = {
        ...oldState.enemies,
        [newId]: {
            a: enemyAnimStates.MOVE,
            x: newSpawnLoc.x,
            y: newSpawnLoc.y,
            r: randomFacing,
            hp: 100,
            speed: newSpeed,
            wasHit: 100
        }
    };

    return {
        enemies: newEnemies
    };
}

export function enemyStep(source, dest, deltaTime, speed) {
    const delta = distance(source, dest);
    const dx = dest[0] - source[0];
    const dy = dest[1] - source[1];
    const factor = Math.sqrt(dx * dx + dy * dy);

    const left = source[0] + ((dx / factor) * speed) / deltaTime;
    const top = source[1] + ((dy / factor) * speed) / deltaTime;
    const angleBetween = angle(source, dest);

    if (delta <= ENEMY_MIN_RANGE) {
        return [source[0], source[1], angleBetween, true];
    } else {
        return [left, top, angleBetween, false];
    }
}
