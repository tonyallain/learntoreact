import { EnemyBundle } from '../assets/bundles/enemy_bundle';

const ENEMY_CONFIGS = [
    // idle
    {
        image: EnemyBundle[0],
        steps: 17,
        widthFrame: 241,
        heightFrame: 222,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 20,
        currentFrame: 0,
        loop: true,
        isAnimating: true
    },
    // move
    {
        image: EnemyBundle[1],
        steps: 17,
        widthFrame: 288,
        heightFrame: 311,
        currentWidth: 0,
        currentHeight: 0,
        rows: 5,
        cols: 4,
        fps: 20,
        currentFrame: 0,
        loop: true,
        isAnimating: true
    },
    // attack
    {
        image: EnemyBundle[2],
        steps: 9,
        widthFrame: 318,
        heightFrame: 294,
        currentWidth: 0,
        currentHeight: 0,
        rows: 3,
        cols: 3,
        fps: 20,
        currentFrame: 0,
        loop: false,
        isAnimating: true
    }
];

export default ENEMY_CONFIGS;
