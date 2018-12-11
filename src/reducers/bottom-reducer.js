import { actionTypes } from '../actions/player-actions';
import { FEET_CONFIGS } from '../config/bottom-animations';

const initialState = {
    ...FEET_CONFIGS[0]
};

const bottomReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SWAP_BOTTOM:
            return { ...state, ...action.payload };
        case actionTypes.ANIMATE_BOTTOM:
            return { ...state, ...action.payload };
        case actionTypes.TRIGGER_ANIMATION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default bottomReducer;
