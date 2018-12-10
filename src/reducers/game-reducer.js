import GameLoop from '../utils/game-loop';
import KeyListener from '../utils/key-listener';

const initialState = {
    isGameOver: false,
    isPaused: false,
    update: new GameLoop(),
    input: new KeyListener()
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default gameReducer;
