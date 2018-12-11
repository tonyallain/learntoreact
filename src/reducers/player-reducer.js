import { actionTypes } from '../actions/player-actions';

const initialState = {
    position: [window.innerWidth / 2, window.innerHeight / 2],
    rotation: 0,
    moveSpeed: 500,
    size: 128,
    strafeDirection: 0,
    scale: 1
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ROTATE:
            return { ...state, ...action.payload };
        case actionTypes.MOVE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default playerReducer;
