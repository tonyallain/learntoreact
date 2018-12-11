import SHOTGUN_IDLE from '../assets/Top_Down_Survivor/shotgun/idle/sheet.png';
import SHOTGUN_MOVE from '../assets/Top_Down_Survivor/shotgun/move/sheet.png';
import SHOTGUN_MELEE from '../assets/Top_Down_Survivor/shotgun/meleeattack/sheet.png';
import SHOTGUN_RELOAD from '../assets/Top_Down_Survivor/shotgun/reload/sheet.png';
import SHOTGUN_SHOOT from '../assets/Top_Down_Survivor/shotgun/shoot/sheet.png';

const SHOTGUN_CONFIGS = [
    // idle
    {
        image: SHOTGUN_IDLE,
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
        image: SHOTGUN_MOVE,
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
        image: SHOTGUN_MELEE,
        steps: 15,
        widthFrame: 358,
        heightFrame: 353,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 3,
        fps: 35,
        currentFrame: 0,
        loop: false,
        isAnimating: true,
        adjust: [20, -5]
    },
    // reload
    {
        image: SHOTGUN_RELOAD,
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
        adjust: [20, 2]
    },
    // shoot
    {
        image: SHOTGUN_SHOOT,
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

export default SHOTGUN_CONFIGS;
