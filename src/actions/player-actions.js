export const actionTypes = {
    ROTATE: 'rotate'
};

export const setFacing = deg => {
    return {
        type: actionTypes.ROTATE,
        payload: { rotation: deg }
    };
};
