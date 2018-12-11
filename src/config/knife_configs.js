import KNIFE_IDLE from '../assets/Top_Down_Survivor/knife/idle/sheet.png';
import KNIFE_MOVE from '../assets/Top_Down_Survivor/knife/move/sheet.png';
import KNIFE_MELEE from '../assets/Top_Down_Survivor/knife/meleeattack/sheet.png';

const KNIFE_CONFIGS = [
    // idle
    {
        image: KNIFE_IDLE,
        steps: 20,
        widthFrame: 289,
        heightFrame: 224,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true
    },
    // move
    {
        image: KNIFE_MOVE,
        steps: 20,
        widthFrame: 279,
        heightFrame: 219,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: true,
        isAnimating: true
    },
    // melee
    {
        image: KNIFE_MELEE,
        steps: 15,
        widthFrame: 329,
        heightFrame: 300,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 3,
        fps: 30,
        currentFrame: 0,
        loop: false,
        isAnimating: true
    }
];

export default KNIFE_CONFIGS;
