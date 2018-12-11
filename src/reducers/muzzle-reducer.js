import { actionTypes } from '../actions/player-actions';
import { getMuzzleSettings } from '../config/muzzle-positions';
import { STARTING_WEAPON } from '../utils/constants';

const initialState = {
    hidde: true,
    ...getMuzzleSettings(STARTING_WEAPON)
};

const muzzleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOOT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default muzzleReducer;
