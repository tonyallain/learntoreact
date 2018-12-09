const initialState = {
    position: [window.innerWidth / 2, window.innerHeight / 2],
    rotation: 0
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default playerReducer;
