import RIFLE_IDLE from '../assets/Top_Down_Survivor/rifle/idle/sheet.png';
import RIFLE_MOVE from '../assets/Top_Down_Survivor/rifle/move/sheet.png';
import RIFLE_MELEE from '../assets/Top_Down_Survivor/rifle/meleeattack/sheet.png';
import RIFLE_RELOAD from '../assets/Top_Down_Survivor/rifle/reload/sheet.png';
import RIFLE_SHOOT from '../assets/Top_Down_Survivor/rifle/shoot/sheet.png';

const RIFLE_CONFIGS = [
    // idle
    {
        image: RIFLE_IDLE,
        steps: 20,
        widthFrame: 313,
        heightFrame: 207,
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
        image: RIFLE_MOVE,
        steps: 20,
        widthFrame: 313,
        heightFrame: 206,
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
        image: RIFLE_MELEE,
        steps: 15,
        widthFrame: 358,
        heightFrame: 353,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 3,
        fps: 30,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [20, -5]
    },
    // reload
    {
        image: RIFLE_RELOAD,
        steps: 20,
        widthFrame: 322,
        heightFrame: 217,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 30,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [0, 0]
    },
    // shoot
    {
        image: RIFLE_SHOOT,
        steps: 3,
        widthFrame: 312,
        heightFrame: 206,
        currentWidth: 0,
        currentHeight: 0,
        rows: 3,
        cols: 1,
        fps: 30,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [20, 0]
    }
];

export default RIFLE_CONFIGS;
