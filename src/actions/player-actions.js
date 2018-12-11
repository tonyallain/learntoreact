import { angle } from '../utils/vector';
import { getNextFrame } from '../utils/animator';

export const actionTypes = {
    ROTATE: 'rotate',
    MOVE: 'move',
    ANIMATE: 'animate',
    TRIGGER_ANIMATION: 'trigger-animation'
};

export const setFacing = (A, B) => {
    return {
        type: actionTypes.ROTATE,
        payload: { rotation: angle(A, B) }
    };
};

export const movePlayer = (oldPosition, newPosition, lookAt, strafe) => {
    return {
        type: actionTypes.MOVE,
        payload: {
            position: newPosition,
            rotation: angle(oldPosition, lookAt),
            strafeDirection: strafe
        }
    };
};

export const animatePlayer = animProps => {
    const newFrame = getNextFrame(animProps);

    return {
        type: actionTypes.ANIMATE,
        payload: {
            ...animProps,
            ...newFrame
        }
    };
};

export const triggerAnimation = (startAnim, shouldLoop) => {
    return {
        type: actionTypes.TRIGGER_ANIMATION,
        payload: {
            isAnimating: startAnim,
            currentFrame: 0,
            loop: shouldLoop
        }
    };
};
