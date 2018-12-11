import HANDGUN_IDLE from '../assets/Top_Down_Survivor/handgun/idle/sheet.png';

export const TORSO_CONFIGS = [
    {
        image: FEET_IDLE_SHEET,
        steps: 1,
        widthFrame: 132,
        heightFrame: 155,
        currentWidth: 0,
        currentHeight: 0,
        rows: 1,
        cols: 1,
        fps: 1,
        currentFrame: 0,
        loop: false,
        isAnimating: true
    },
    {
        image: FEET_MOVE_SHEET,
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
    },
    {
        image: FEET_STRAFE_LEFT_SHEET,
        steps: 20,
        widthFrame: 155,
        heightFrame: 174,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true
    },
    {
        image: FEET_STRAFE_RIGHT_SHEET,
        steps: 20,
        widthFrame: 154,
        heightFrame: 176,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true
    }
];
