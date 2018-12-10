const initialState = {
    position: [window.innerWidth / 2, window.innerHeight / 2],
    rotation: 0,
    keyDown: {},
    getInstance: sheet => {
        console.log(sheet);
    }
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default playerReducer;
