import FLASHLIGHT_IDLE from '../assets/Top_Down_Survivor/flashlight/idle/sheet.png';
import FLASHLIGHT_MOVE from '../assets/Top_Down_Survivor/flashlight/move/sheet.png';
import FLASHLIGHT_MELEE from '../assets/Top_Down_Survivor/flashlight/meleeattack/sheet.png';

const FLASHLIGHT_CONFIGS = [
    // idle
    {
        image: FLASHLIGHT_IDLE,
        steps: 20,
        widthFrame: 303,
        heightFrame: 223,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true,
        adjust: [20, 0]
    },
    // move
    {
        image: FLASHLIGHT_MOVE,
        steps: 20,
        widthFrame: 305,
        heightFrame: 231,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true,
        adjust: [20, 0]
    },
    // melee
    {
        image: FLASHLIGHT_MELEE,
        steps: 15,
        widthFrame: 316,
        heightFrame: 246,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 3,
        fps: 30,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [20, -10]
    }
];

export default FLASHLIGHT_CONFIGS;
