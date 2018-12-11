// since we want N zombies, we should probably just use a singular state to manage all of them
const initialState = {
    enemies: [], // an array that will populate as zombies are instantiated, when a zombie "dies" it just gets recycled
    x: [], // individual array housing the x coords of the enemies
    y: [], // individual array housing the y coords of the enemies
    r: [] // individual array housing the rotation of enemies
};

const enemyReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
