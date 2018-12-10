import React, { Component } from 'react';
import { angle, distance, slope } from '../utils/vector';
import ZombieIdle from './zombie-components/ZombieIdle';
import ZombieMove from './zombie-components/ZombieMove';
import ZombieAttack from './zombie-components/ZombieAttack';
import { spawnPosition } from '../utils/helpers';
import Spritesheet from '../utils/Spritesheet';
import attackSheet from '../../src/assets/enemies/attack/sheet.png';
import moveSheet from '../../src/assets/enemies/move/sheet.png';
import idleSheet from '../../src/assets/enemies/idle/sheet.png';
import { getVariance } from '../utils/helpers';

const realizationMax = 5000;
const idleTime = 10000;
const travelTime = 3000;
const aggroRadius = 40;
const maxMovespeed = 10;

class Zombie extends Component {
    constructor(props) {
        super(props);

        let spawnLoc = spawnPosition();
        this.fps = getVariance(15, 2);
        this.movespeed = maxMovespeed + Math.random() * maxMovespeed;

        this.anims = {
            idle: {
                className: 'zombieIdle',
                image: idleSheet,
                widthFrame: 240,
                heightFrame: 222,
                steps: 17
            },
            move: {
                className: 'zombieMove',
                image: moveSheet,
                widthFrame: 288,
                heightFrame: 311,
                steps: 17
            },
            attack: {
                className: 'zombieAttack',
                image: attackSheet,
                widthFrame: 318,
                heightFrame: 294,
                steps: 9
            }
        };

        this.currentAnim = { ...this.anims.idle };

        this.currentIdleTime = Math.random() * idleTime;
        this.currentRealizationTime = Math.random() * realizationMax;
        this.currentTravelTime = 0;
        this.distFromPlayer = 0;
        this.distFromDest = 0;
        this.destination = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        this.desiredRotation = angle(
            { x: spawnLoc.x, y: spawnLoc.y },
            this.destination
        );

        this.state = {
            position: {
                x: spawnLoc.x,
                y: spawnLoc.y,
                r: this.desiredRotation
            }
        };

        this.zombieAI.bind(this);
        this.moveToDest.bind(this);
        this.updateDest.bind(this);
        this.zombieAnim.bind(this);
        this.getInstance.bind(this);
    }

    getInstance(spriteSheet) {
        console.log(spriteSheet.getInfo('isPlaying'));
    }

    zombieAI() {
        if (this.currentTravelTime <= 0) {
            this.currentTravelTime = Math.random() * travelTime;
        }

        setTimeout(() => {
            this.currentIdleTime = Math.random() * idleTime;
            this.zombieAI();
        }, this.currentIdleTime);
    }

    updateDest() {
        const newDest = {
            x: this.props.playerPosition.x,
            y: this.props.playerPosition.y
        };

        // this is my current angle
        const angleBetween = angle(
            { x: this.state.position.x, y: this.state.position.y },
            newDest
        );

        this.destination = newDest;
        this.desiredRotation = angleBetween;

        setTimeout(() => {
            this.currentRealizationTime = Math.random() * realizationMax;
            this.updateDest();
        }, this.currentRealizationTime);
    }

    moveToDest(deltaTime) {
        this.distFromPlayer = distance(
            { x: this.state.position.x, y: this.state.position.y },
            this.props.playerPosition
        );

        if (this.distFromPlayer < aggroRadius) {
            const facingPlayer = angle(
                { x: this.state.position.x, y: this.state.position.y },
                this.props.playerPosition
            );
            // update rotation so he smashes the player if they are circling
            this.setState({
                ...this.state,
                position: { ...this.state.position, r: facingPlayer }
            });
        }

        if (this.currentTravelTime > 0) {
            this.currentTravelTime -= deltaTime;

            const A = { x: this.state.position.x, y: this.state.position.y };
            const B = this.destination;

            this.distFromDest = distance(A, B);
            // this is my current angle
            const angleBetween = angle(A, B);
            const travelFactor = slope(A, B);
            const width =
                travelFactor.run * (deltaTime / 1000 / this.movespeed);
            const height =
                travelFactor.rise * (deltaTime / 1000 / this.movespeed);

            if (
                this.distFromDest > aggroRadius &&
                this.distFromPlayer > aggroRadius
            ) {
                this.setState({
                    ...this.state,
                    position: {
                        x: this.state.position.x + width,
                        y: this.state.position.y + height,
                        r: angleBetween
                    }
                });
            }
        }
    }

    componentDidMount() {
        // begin the AI timer
        setTimeout(() => {
            this.zombieAI();
        }, this.currentIdleTime);

        setTimeout(() => {
            this.updateDest();
        }, this.currentRealizationTime);

        this.id = this.props.gameloop.subscribe(dt => {
            this.moveToDest(dt);
        });
    }

    componentWillUnmount() {
        this.props.gameloop.unsubscribe(this.id);
    }

    zombieAnim() {
        if (this.distFromPlayer < aggroRadius) {
            this.currentAnim = { ...this.anims.attack };
        } else {
            if (this.currentTravelTime > 0 && this.distFromDest > aggroRadius) {
                this.currentAnim = { ...this.anims.move };
            } else {
                this.currentAnim = { ...this.anims.idle };
            }
        }

        return (
            <Spritesheet
                className={this.currentAnim.className}
                image={this.currentAnim.image}
                widthFrame={this.currentAnim.widthFrame}
                heightFrame={this.currentAnim.heightFrame}
                steps={this.currentAnim.steps}
                fps={this.fps}
                autoplay={true}
                loop={true}
                gameloop={this.props.gameloop}
                getInstance={this.getInstance}
            />
        );
    }

    render() {
        return (
            <div
                className='player'
                style={{
                    left: this.state.position.x,
                    top: this.state.position.y,
                    transform: `rotate(${
                        this.state.position.r
                    }deg) translate(-50%, -50%)`
                }}
            >
                {this.zombieAnim()}
            </div>
        );
    }
}

export default Zombie;
