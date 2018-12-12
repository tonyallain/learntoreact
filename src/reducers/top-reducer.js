import { actionTypes } from '../actions/player-actions';
import { getWeaponConfig } from '../config/top-animations';
import { STARTING_WEAPON } from '../utils/constants';

const initialState = {
    ...getWeaponConfig(STARTING_WEAPON, 0),
    wasHit: 0
};

const topReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ANIMATE_TOP:
            return { ...state, ...action.payload };
        case actionTypes.TRIGGER_ANIMATION:
            return { ...state, ...action.payload };
        case actionTypes.SWAP_TOP:
            return { ...state, ...action.payload };
        case actionTypes.PLAYER_TAKE_DAMAGE:
            return { ...state, wasHit: 100 };
        case actionTypes.PLAYER_HEAL:
            return { ...state, wasHit: 0 };
        default:
            return state;
    }
};

export default topReducer;
