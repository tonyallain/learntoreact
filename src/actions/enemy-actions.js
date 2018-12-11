const actionTypes = {
    ENEMY_ANIMATE: 'enemy-animate',
    ENEMY_ATTACK: 'enemy-attack',
    ENEMY_DIE: 'enemy-die',
    ENEMY_SPAWN: 'enemy-spawn'
};

const enemyAnimStates = {
    DEAD: 0,
    IDLE: 1,
    MOVE: 2,
    ATTACK: 3
};

const animateEnemy = enemyId => {
    return {
        type: actionTypes.ENEMY_ANIMATE,
        payload: {}
    };
};

// their index is the ID of that particular zombie
// 0 = dead (hidden)
// 1 = idle
// 2 = move
// 3 = attack

const spawnEnemy = enemies => {
    const newEnemies = [...enemies];

    // what should we push into enemies? how about the zombie's animation state
    newEnemies.push(enemyAnimStates.IDLE);
    // we need to figure out spawn position

    return {
        type: actionTypes.ENEMY_SPAWN,
        payload: {
            enemies: [...newEnemies]
        }
    };
};
