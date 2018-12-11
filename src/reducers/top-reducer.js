import { actionTypes } from '../actions/player-actions';

const initialState = {
    image: 'TEMP TOP',
    steps: 20,
    widthFrame: 258,
    heightFrame: 220,
    currentWidth: 0,
    currentHeight: 0,
    rows: 5,
    cols: 4,
    fps: 30,
    currentFrame: 0,
    loop: true,
    isAnimating: true
};

const topReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ANIMATE:
            return { ...state, ...action.payload };
        case actionTypes.TRIGGER_ANIMATION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default topReducer;
