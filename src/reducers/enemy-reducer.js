import { actionTypes } from '../actions/enemy-actions';
// since we want N zombies, we should probably just use a singular state to manage all of them
const initialState = {
    enemies: {}
};
// arrays aren't guaranteed order in state

const enemyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ENEMY_MOVE:
            const enemyObject = {
                [action.payload.id]: {
                    a: state.enemies[action.payload.id].a,
                    x: action.payload.x,
                    y: action.payload.y,
                    r: action.payload.r
                }
            };

            return { ...state, ...enemyObject };
        case actionTypes.ENEMY_SPAWN:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default enemyReducer;
