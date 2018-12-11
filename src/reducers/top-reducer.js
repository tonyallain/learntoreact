import { actionTypes } from '../actions/player-actions';

const initialState = {
    image: '',
    steps: 15,
    widthFrame: 291,
    heightFrame: 256,
    currentWidth: 0,
    currentHeight: 0,
    rows: 5,
    cols: 3,
    fps: 30,
    currentFrame: 0,
    loop: false,
    isAnimating: false
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
