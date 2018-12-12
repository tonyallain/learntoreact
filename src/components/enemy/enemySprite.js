import React from 'react';
import store from '../../store';
import { getNextFrame } from '../../utils/animator';
import ENEMY_CONFIGS from '../../config/enemy-configs';
import { takeDamage } from '../../actions/player-actions';

class EnemySprite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentWidth: 0,
            currentHeight: 0,
            currentFrame: 0,
            fpsMod: Math.max(Math.random(), 0.65)
        };
    }

    isAlive() {
        if (this.props.currentAnim > -1) {
            return (
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: `${
                            ENEMY_CONFIGS[this.props.currentAnim].widthFrame
                        }px`,
                        height: `${
                            ENEMY_CONFIGS[this.props.currentAnim].heightFrame
                        }px`,
                        transform: `translate(-50%, -50%)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url('${
                            ENEMY_CONFIGS[this.props.currentAnim].image
                        }')`,
                        backgroundPosition: `-${this.state.currentWidth}px -${
                            this.state.currentHeight
                        }px`
                    }}
                />
            );
        } else {
            return <div />;
        }
    }

    render() {
        return <div>{this.isAlive()}</div>;
    }

    componentDidMount() {
        const update = store.getState().game.update;
        this.timer = 0;
        this.subId = update.subscribe(deltaTime => {
            this.timer += deltaTime;
            if (
                this.timer >
                (1000 /
                    ENEMY_CONFIGS[Math.max(this.props.currentAnim, 0)].fps) *
                    this.state.fpsMod
            ) {
                this.setState((prevState, props) => {
                    const nextFrame = getNextFrame({
                        ...ENEMY_CONFIGS[props.currentAnim],
                        currentFrame: prevState.currentFrame
                    });
                    return { ...prevState, ...nextFrame };
                });

                if (this.props.currentAnim === 2) {
                    store.dispatch(
                        takeDamage(
                            1 / (this.state.fpsMod * ENEMY_CONFIGS[2].fps)
                        )
                    );
                }
                this.timer = 0;
            }
        });
    }

    componentWillUnmount() {
        const update = store.getState().game.update;
        update.unsubscribe(this.subId);
    }
}

export default EnemySprite;
