import React from 'react';
import { connect } from 'react-redux';
import testSheet from '../../assets/Top_Down_Survivor/handgun/meleeattack/sheet.png';
import testSheet2 from '../../assets/Top_Down_Survivor/feet/run/sheet.png';
import store from '../../store';
import {
    setFacing,
    movePlayer,
    animatePlayer,
    triggerAnimation
} from '../../actions/player-actions';
import {
    DIAGONAL_RATIO,
    STRAFE_LEFT,
    STRAFE_RIGHT
} from '../../utils/constants';
import Top from './top';
import Bottom from './bottom';

class Player extends React.Component {
    render() {
        return (
            <div
                style={{
                    position: 'fixed',
                    left: this.props.position[0],
                    top: this.props.position[1],
                    width: `${this.props.size}px`,
                    height: `${this.props.size}px`,
                    border: '2px solid black',
                    transformOrigin: 'top left',
                    transform: `rotate(${this.props.rotation}deg) scale(${
                        this.props.scale
                    }) translate(-50%, -50%)`
                }}
            >
                <Bottom />
                <Top />
            </div>
        );
    }

    componentDidMount() {
        // we want to subscribe to the states update renderer
        const storeState = store.getState();
        const input = storeState.game.input;
        const update = storeState.game.update;
        this.timer = 0;

        // sub my mouseLook
        this.rotateId = input.subscribe((e, isClick) => {
            if (isClick) {
                console.log('clicked');
                // dispatch an anim call if we can interrupt the current anim
                //store.dispatch(triggerAnimation(true, true));
            } else {
                store.dispatch(setFacing(this.props.position, e));
            }
        });

        // sub my move logic
        this.moveId = update.subscribe(deltaTime => {
            let x = 0;
            let y = 0;

            const moveAmount =
                this.props.moveSpeed * (deltaTime / 1000) * this.props.scale;

            if (input.isDown('w')) {
                y -= moveAmount;
            }
            if (input.isDown('s')) {
                y += moveAmount;
            }
            if (input.isDown('q')) {
                x -= moveAmount;
            }
            if (input.isDown('e')) {
                x += moveAmount;
            }

            if (x !== 0 && y !== 0) {
                x *= DIAGONAL_RATIO;
                y *= DIAGONAL_RATIO;
            }

            const newPosition = [
                this.props.position[0] + x,
                this.props.position[1] + y
            ];

            let strafeDirection = 0;
            if (this.props.rotation >= -45 && this.props.rotation < 45) {
                // facing right
                if (y < 0) {
                    strafeDirection = STRAFE_LEFT;
                } else if (y > 0) {
                    strafeDirection = STRAFE_RIGHT;
                }
            } else if (this.props.rotation >= 45 && this.props.rotation < 135) {
                // facing down
                if (x < 0) {
                    strafeDirection = STRAFE_RIGHT;
                } else if (x > 0) {
                    strafeDirection = STRAFE_LEFT;
                }
            } else if (
                this.props.rotation >= 135 ||
                this.props.rotation < -135
            ) {
                // facing left
                if (y < 0) {
                    strafeDirection = STRAFE_RIGHT;
                } else if (y > 0) {
                    strafeDirection = STRAFE_LEFT;
                }
            } else if (
                this.props.rotation >= -135 &&
                this.props.rotation < -45
            ) {
                // facing up
                if (x < 0) {
                    strafeDirection = STRAFE_LEFT;
                } else if (x > 0) {
                    strafeDirection = STRAFE_RIGHT;
                }
            }

            const scaledSize = (this.props.size * this.props.scale) / 2;

            if (newPosition[0] < scaledSize) {
                newPosition[0] = scaledSize;
            } else if (newPosition[0] > window.innerWidth - scaledSize) {
                newPosition[0] = window.innerWidth - scaledSize;
            }

            if (newPosition[1] < scaledSize) {
                newPosition[1] = scaledSize;
            } else if (newPosition[1] > window.innerHeight - scaledSize) {
                newPosition[1] = window.innerHeight - scaledSize;
            }

            store.dispatch(
                movePlayer(
                    this.props.position,
                    newPosition,
                    input.getMousePos(),
                    strafeDirection
                )
            );
        });

        // we also want to sub my animation
        this.animId = update.subscribe(deltaTime => {
            // if (this.props.isAnimating) {
            //     this.timer += deltaTime;
            //     if (this.timer > 1000 / this.props.fps) {
            //         this.timer = 0;
            //         store.dispatch(animatePlayer(this.props));
            //     }
            // }
        });
    }

    componentWillUnmount() {
        // we need to unregister
        const storeState = store.getState();
        const input = storeState.game.input;
        const update = storeState.game.update;

        input.unsubscribe(this.rotateId);
        update.unsubscribe(this.moveId);
        update.unsubscribe(this.animId);
    }
}

function mapStateToProps(state) {
    return {
        ...state.player
    };
}

export default connect(mapStateToProps)(Player);
