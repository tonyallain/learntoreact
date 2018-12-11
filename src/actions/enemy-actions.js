const actionTypes = {
    ANIMATE_ENEMY: 'animate-enemy'
};

const animateEnemy = enemyId => {
    return {
        type: actionTypes.ANIMATE_ENEMY,
        payload: {}
    };
};
