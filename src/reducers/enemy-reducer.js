import { actionTypes } from '../actions/enemy-actions';
// since we want N zombies, we should probably just use a singular state to manage all of them
const initialState = {
    enemies: {}
};

const enemyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ENEMY_MOVE:
            return {
                ...state,
                enemies: { ...state.enemies, ...action.payload }
            };
        case actionTypes.ENEMY_SPAWN:
            return { ...state, ...action.payload };
        case actionTypes.ENEMY_DAMAGED:
            return {
                ...state,
                enemies: { ...state.enemies, ...action.payload }
            };
        case actionTypes.ENEMY_DIE:
            return {
                ...state,
                enemies: { ...state.enemies, ...action.payload }
            };
        default:
            return state;
    }
};

export default enemyReducer;
