import { angle } from './vector';

const enemyAnimStates = {
    DEAD: -1,
    IDLE: 0,
    MOVE: 1,
    ATTACK: 2
};
const edgeBuffer = -100; // revert back to 100

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

export function addEnemy(oldState) {
    const newId = Object.keys(oldState.enemies).length;
    const newSpawnLoc = spawnPosition();
    const randomFacing = Math.random() * 360;

    const newEnemies = { ...oldState.enemies, [newId]: enemyAnimStates.IDLE };
    const newX = { ...oldState.x, [newId]: newSpawnLoc.x };
    const newY = { ...oldState.y, [newId]: newSpawnLoc.y };
    const newR = { ...oldState.r, [newId]: randomFacing };

    return {
        enemies: newEnemies,
        x: newX,
        y: newY,
        r: newR
    };
}

export function enemyStep(source, dest, deltaTime, speed) {
    const dx = dest[0] - source[0];
    const dy = dest[1] - source[1];
    const left = source[0] + (dx * deltaTime) / 1000 / speed;
    const top = source[1] + (dy * deltaTime) / 1000 / speed;
    const angleBetween = angle(source, dest);

    return [left, top, angleBetween];
}
