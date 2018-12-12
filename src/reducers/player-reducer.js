import { actionTypes } from '../actions/player-actions';
import { STARTING_WEAPON } from '../utils/constants';

const initialState = {
    position: [window.innerWidth / 2, window.innerHeight / 2],
    rotation: 0,
    moveSpeed: 500,
    size: 128,
    strafeDirection: 0,
    scale: 1,
    currentWeapon: STARTING_WEAPON,
    hp: 100
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ROTATE:
            return { ...state, ...action.payload };
        case actionTypes.MOVE:
            return { ...state, ...action.payload };
        case actionTypes.SWAP_WEAPON:
            return { ...state, ...action.payload };
        case actionTypes.PLAYER_TAKE_DAMAGE:
            console.log(`${state.hp} -> ${state.hp - action.payload}`);
            return { ...state, hp: state.hp - action.payload };
        default:
            return state;
    }
};

export default playerReducer;
