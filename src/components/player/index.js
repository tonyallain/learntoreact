import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import {
    setFacing,
    movePlayer,
    swapBottom,
    triggerAnimationTop,
    swapWeapon,
    swapTop
} from '../../actions/player-actions';
import {
    DIAGONAL_RATIO,
    FEET_IDLE,
    FEET_MOVE,
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

        // sub my keystrokes
        this.keyDownId = input.subscribe(key => {
            switch (key) {
                case '1':
                    store.dispatch(swapWeapon(0));
                    store.dispatch(swapTop(0));
                    break;
                case '2':
                    store.dispatch(swapWeapon(1));
                    store.dispatch(swapTop(1));
                    break;
                case '3':
                    store.dispatch(swapWeapon(2));
                    store.dispatch(swapTop(2));
                    break;
                case '4':
                    store.dispatch(swapWeapon(3));
                    store.dispatch(swapTop(3));
                    break;
                case '5':
                    store.dispatch(swapWeapon(4));
                    store.dispatch(swapTop(4));
                    break;
                default:
                    break;
            }
        }, true);

        // sub my mouseLook
        this.rotateId = input.subscribe((e, isClick) => {
            if (isClick) {
                console.log('click');
                //store.dispatch(triggerAnimationTop(this.props));
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

            let strafeDirection = x !== 0 || y !== 0 ? FEET_MOVE : FEET_IDLE;

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

            if (strafeDirection !== this.props.strafeDirection) {
                store.dispatch(swapBottom(strafeDirection));
            }

            // if we changed from 0 to non 0 we should swap tops from idle -> move
            if (this.props.strafeDirection === 0 && strafeDirection !== 0) {
                console.log('from idle to moving');
                store.dispatch(swapTop(this.props.currentWeapon, 1));
            } else if (
                this.props.strafeDirection !== 0 &&
                strafeDirection === 0
            ) {
                console.log('from moving to idle');
                store.dispatch(swapTop(this.props.currentWeapon, 0));
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
    }

    componentWillUnmount() {
        // we need to unregister
        const storeState = store.getState();
        const input = storeState.game.input;
        const update = storeState.game.update;

        input.unsubscribe(this.rotateId);
        update.unsubscribe(this.moveId);
        input.unsubscribe(this.keyDownId);
    }
}

function mapStateToProps(state) {
    return {
        ...state.player
    };
}

export default connect(mapStateToProps)(Player);
