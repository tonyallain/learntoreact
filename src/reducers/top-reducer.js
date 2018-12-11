import { actionTypes } from '../actions/player-actions';
import { getWeaponConfig } from '../config/top-animations';
import { STARTING_WEAPON } from '../utils/constants';

const initialState = {
    ...getWeaponConfig(STARTING_WEAPON, 0)
};

const topReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ANIMATE_TOP:
            return { ...state, ...action.payload };
        case actionTypes.TRIGGER_ANIMATION:
            return { ...state, ...action.payload };
        case actionTypes.SWAP_TOP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default topReducer;
