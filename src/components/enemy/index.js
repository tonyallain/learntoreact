import React from 'react';
import EnemySprite from './enemySprite';
import { connect } from 'react-redux';
import { spawnEnemy, moveEnemy, takeDamage } from '../../actions/enemy-actions';
import store from '../../store';

class Enemy extends React.Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.enemies).map(enemyId => {
                    return (
                        <div
                            key={enemyId}
                            style={{
                                position: 'fixed',
                                left: `${this.props.enemies[enemyId].x}px`,
                                top: `${this.props.enemies[enemyId].y}px`,
                                width: `256px`,
                                height: `256px`,
                                transformOrigin: 'top left',
                                transform: `rotate(${
                                    this.props.enemies[enemyId].r
                                }deg) scale(1) translate(-50%, -50%)`
                            }}
                            onClick={() => {
                                console.log(
                                    `I have ${this.props.enemies[enemyId].hp}`
                                );
                                store.dispatch(
                                    takeDamage(
                                        enemyId,
                                        this.props.enemies[enemyId]
                                    )
                                );
                            }}
                        >
                            <EnemySprite
                                currentAnim={this.props.enemies[enemyId].a}
                                id={enemyId}
                                wasHit={this.props.enemies[enemyId].wasHit}
                            />
                        </div>
                    );
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
                if (this.max < 10) {
                    store.dispatch(spawnEnemy(this.props));
                    this.max++;
                }
            }

            const playerPosition = store.getState().player.position;

            Object.keys(this.props.enemies).forEach(zombieId => {
                store.dispatch(
                    moveEnemy(
                        zombieId,
                        this.props.enemies[zombieId],
                        playerPosition,
                        deltaTime
                    )
                );
            });
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
