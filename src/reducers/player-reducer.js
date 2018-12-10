import { actionTypes } from '../actions/player-actions';

const initialState = {
    position: [window.innerWidth / 2, window.innerHeight / 2],
    rotation: 0,
    scale: 1
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ROTATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default playerReducer;
