import { actionTypes } from '../actions/player-actions';

const initialState = {
    image: '',
    steps: 20,
    widthFrame: 204,
    heightFrame: 124,
    currentWidth: 0,
    currentHeight: 0,
    rows: 5,
    cols: 4,
    fps: 30,
    currentFrame: 0,
    loop: true,
    isAnimating: true
};

const bottomReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ANIMATE:
            return { ...state, ...action.payload };
        case actionTypes.TRIGGER_ANIMATION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default bottomReducer;
