import React from 'react';
import EnemySprite from './enemySprite';
import { connect } from 'react-redux';
import { spawnEnemy, moveEnemy } from '../../actions/enemy-actions';
import store from '../../store';

class Enemy extends React.Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.enemies).map(enemyId => {
                    if (this.props.enemies[enemyId] > -1) {
                        return (
                            <div
                                key={enemyId}
                                style={{
                                    position: 'fixed',
                                    left: `${this.props.x[enemyId]}px`,
                                    top: `${this.props.y[enemyId]}px`,
                                    width: `256px`,
                                    height: `256px`,
                                    transformOrigin: 'top left',
                                    transform: `rotate(${
                                        this.props.r[enemyId]
                                    }deg) scale(1) translate(-50%, -50%)`
                                }}
                            >
                                <EnemySprite
                                    currentAnim={this.props.enemies[enemyId]}
                                    id={enemyId}
                                />
                            </div>
                        );
                    } else {
                        // the enemy is dead, so it's hidden
                        return <div key={enemyId} />;
                    }
                })}
            </div>
        );
    }

    componentDidMount() {
        // let's spawn an enemy
        this.timer = 0;
        this.max = 0;
        const update = store.getState().game.update;

        this.spawnerId = update.subscribe(deltaTime => {
            this.timer += deltaTime;
            if (this.timer > 1000) {
                this.timer = 0;
                if (this.max < 25) {
                    store.dispatch(spawnEnemy(this.props));
                    this.max++;
                }
            }

            // if (this.props.enemies.length > 0) {
            //     const randomId = Math.floor(
            //         Math.random() * (this.props.enemies.length - 1)
            //     );
            //     const playerPosition = store.getState().player.position;
            //     store.dispatch(
            //         moveEnemy(
            //             randomId,
            //             [this.props.x[randomId].x, this.props.y[randomId].y],
            //             playerPosition,
            //             deltaTime,
            //             1
            //         )
            //     );

            //     console.log(this.props.x[0], this.props.y[0]);
            // }
        });
    }

    componentWillUnmount() {
        const update = store.getState().game.update;
        update.unsubscribe(this.spawnerId);
    }
}

function mapStateToProps(state) {
    return {
        ...state.enemy
    };
}

export default connect(mapStateToProps)(Enemy);
