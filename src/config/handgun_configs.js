import HANDGUN_IDLE from '../assets/Top_Down_Survivor/handgun/idle/sheet.png';
import HANDGUN_MOVE from '../assets/Top_Down_Survivor/handgun/move/sheet.png';
import HANDGUN_MELEE from '../assets/Top_Down_Survivor/handgun/meleeattack/sheet.png';
import HANDGUN_RELOAD from '../assets/Top_Down_Survivor/handgun/reload/sheet.png';
import HANDGUN_SHOOT from '../assets/Top_Down_Survivor/handgun/shoot/sheet.png';

const HANDGUN_CONFIGS = [
    // idle
    {
        image: HANDGUN_IDLE,
        steps: 20,
        widthFrame: 253,
        heightFrame: 216,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true,
        adjust: [0, 0]
    },
    // move
    {
        image: HANDGUN_MOVE,
        steps: 20,
        widthFrame: 258,
        heightFrame: 220,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true,
        adjust: [0, 0]
    },
    // melee
    {
        image: HANDGUN_MELEE,
        steps: 15,
        widthFrame: 291,
        heightFrame: 256,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 3,
        fps: 35,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [10, 10]
    },
    // reload
    {
        image: HANDGUN_RELOAD,
        steps: 15,
        widthFrame: 260,
        heightFrame: 230,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 3,
        fps: 30,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [0, 5]
    },
    // shoot
    {
        image: HANDGUN_SHOOT,
        steps: 3,
        widthFrame: 255,
        heightFrame: 215,
        currentWidth: 0,
        currentHeight: 0,
        rows: 3,
        cols: 1,
        fps: 30,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [0, 0]
    }
];

export default HANDGUN_CONFIGS;
