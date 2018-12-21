import { actionTypes } from '../actions/player-actions';
import { STARTING_WEAPON } from '../utils/constants';

const initialState = {
    position: [window.innerWidth / 2, window.innerHeight / 2],
    rotation: 0,
    moveSpeed: 500,
    size: 128,
    strafeDirection: 0,
    scale: 0.5,
    currentWeapon: STARTING_WEAPON,
    hp: 100,
    kills: 0
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
            return {
                ...state,
                hp: Math.max(state.hp - action.payload, 0)
            };
        case actionTypes.PLAYER_KILLED_ZOMBIE:
            return {
                ...state,
                kills: state.kills + action.payload
            };
        default:
            return state;
    }
};

export default playerReducer;
