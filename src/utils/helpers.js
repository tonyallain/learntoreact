const enemyAnimStates = {
    DEAD: -1,
    IDLE: 0,
    MOVE: 1,
    ATTACK: 2
};
const edgeBuffer = -100;

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
    const newEnemies = [...oldState.enemies];
    const newX = [...oldState.x];
    const newY = [...oldState.y];
    const newR = [...oldState.r];
    const newSpawnLoc = spawnPosition();
    const randomFacing = Math.random() * 360;

    newEnemies.push(enemyAnimStates.IDLE);
    newX.push(newSpawnLoc.x);
    newY.push(newSpawnLoc.y);
    newR.push(randomFacing);

    return {
        enemies: newEnemies,
        x: newX,
        y: newY,
        r: newR
    };
}
