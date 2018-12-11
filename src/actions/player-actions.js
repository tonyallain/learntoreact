import { angle } from '../utils/vector';
import { getNextFrame } from '../utils/animator';
import { FEET_CONFIGS } from '../config/bottom-animations';

export const actionTypes = {
    ROTATE: 'rotate',
    MOVE: 'move',
    ANIMATE_BOTTOM: 'animate-bottom',
    ANIMATE_TOP: 'animate-top',
    TRIGGER_ANIMATION_BOTTOM: 'trigger-animation-bottom',
    TRIGGER_ANIMATION_TOP: 'trigger-animation-top'
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

export const animateBottom = animProps => {
    const newFrame = getNextFrame(animProps);

    return {
        type: actionTypes.ANIMATE_BOTTOM,
        payload: {
            ...animProps,
            ...newFrame
        }
    };
};

export const animateTop = animProps => {
    const newFrame = getNextFrame(animProps);

    return {
        type: actionTypes.ANIMATE_TOP,
        payload: {
            ...animProps,
            ...newFrame
        }
    };
};

export const triggerAnimationTop = (startAnim, shouldLoop) => {
    return {
        type: actionTypes.TRIGGER_ANIMATION_TOP,
        payload: {
            isAnimating: startAnim,
            currentFrame: 0,
            loop: shouldLoop
        }
    };
};
