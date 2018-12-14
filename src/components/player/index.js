import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import {
    setFacing,
    movePlayer,
    swapBottom,
    swapWeapon,
    swapTop,
    flashMuzzle
} from '../../actions/player-actions';
import {
    DIAGONAL_RATIO,
    FEET_IDLE,
    FEET_MOVE,
    STRAFE_LEFT,
    STRAFE_RIGHT,
    ANIM_IDLE,
    ANIM_MELEE,
    ANIM_MOVE,
    ANIM_RELOAD,
    ANIM_SHOOT,
    MOUSE_LEFT,
    MOUSE_RIGHT,
    WEAPON_HANDGUN,
    WEAPON_FLASHLIGHT,
    WEAPON_KNIFE,
    WEAPON_RIFLE,
    WEAPON_SHOTGUN
} from '../../utils/constants';
import Top from './top';
import Bottom from './bottom';

class Player extends React.Component {
    everyoneWins() {
        if (this.props.hp <= 0) {
            return (
                <div
                    style={{
                        fontSize: 15
                    }}
                >
                    Everyone's a winner in 2018!
                    <br />
                </div>
            );
        } else {
            return <br />;
        }
    }

    render() {
        return (
            <div>
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '10%',
                        fontSize: 40,
                        color: 'white'
                    }}
                >
                    <div>Hackathon 2018</div>
                    <div>"404 Game" made in React-Redux</div>
                    <div>Created by: Tony Allain</div>
                    <div style={{ fontSize: 25, color: 'white' }}>
                        Art: Riley Gombart (https://opengameart.org)
                    </div>
                    <br />
                    <div style={{ color: 'red' }}>
                        Health: {Math.floor(this.props.hp)}
                        {this.everyoneWins()}
                        Kills: {this.props.kills}
                    </div>
                </div>
                <div
                    style={{
                        position: 'fixed',
                        left: `${this.props.position[0]}px`,
                        top: `${this.props.position[1]}px`,
                        width: `${this.props.size}px`,
                        height: `${this.props.size}px`,
                        // border: '2px solid black',
                        transformOrigin: 'top left',
                        transform: `rotate(${this.props.rotation}deg) scale(${
                            this.props.scale
                        }) translate(-50%, -50%)`
                    }}
                >
                    <Bottom />
                    <Top />
                </div>
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
                    store.dispatch(swapWeapon(WEAPON_FLASHLIGHT));
                    store.dispatch(swapTop(WEAPON_FLASHLIGHT));
                    break;
                case '2':
                    store.dispatch(swapWeapon(WEAPON_KNIFE));
                    store.dispatch(swapTop(WEAPON_KNIFE));
                    break;
                case '3':
                    store.dispatch(swapWeapon(WEAPON_HANDGUN));
                    store.dispatch(swapTop(WEAPON_HANDGUN));
                    break;
                case '4':
                    store.dispatch(swapWeapon(WEAPON_SHOTGUN));
                    store.dispatch(swapTop(WEAPON_SHOTGUN));
                    break;
                case '5':
                    store.dispatch(swapWeapon(WEAPON_RIFLE));
                    store.dispatch(swapTop(WEAPON_RIFLE));
                    break;
                case 'r':
                    if (this.props.currentWeapon > WEAPON_KNIFE) {
                        store.dispatch(
                            swapTop(this.props.currentWeapon, ANIM_RELOAD)
                        );
                    }
                    break;
                default:
                    break;
            }
        }, true);

        // sub my mouseLook
        this.rotateId = input.subscribe((e, isClick) => {
            if (isClick) {
                switch (e.button) {
                    case MOUSE_LEFT:
                        // some weapons don't have left click
                        if (this.props.currentWeapon < WEAPON_HANDGUN) {
                            store.dispatch(
                                swapTop(this.props.currentWeapon, ANIM_MELEE)
                            );
                        } else {
                            store.dispatch(
                                swapTop(this.props.currentWeapon, ANIM_SHOOT)
                            );
                            // dispatch muzzle flash
                            store.dispatch(
                                flashMuzzle(this.props.currentWeapon, false)
                            );
                        }
                        break;
                    case MOUSE_RIGHT:
                        store.dispatch(
                            swapTop(this.props.currentWeapon, ANIM_MELEE)
                        );
                        break;
                    default:
                        break;
                }
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
            if (input.isDown('q') || input.isDown('a')) {
                x -= moveAmount;
            }
            if (input.isDown('e') || input.isDown('d')) {
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

            if (
                this.props.strafeDirection === ANIM_IDLE &&
                strafeDirection !== ANIM_IDLE
            ) {
                store.dispatch(swapTop(this.props.currentWeapon, ANIM_MOVE));
            } else if (
                this.props.strafeDirection !== ANIM_IDLE &&
                strafeDirection === ANIM_IDLE
            ) {
                store.dispatch(swapTop(this.props.currentWeapon, ANIM_IDLE));
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
