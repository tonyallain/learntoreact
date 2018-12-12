import React from 'react';
import store from '../../store';
import { animateEnemy } from '../../actions/enemy-actions';

class EnemySprite extends React.Component {
    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: `${this.props.widthFrame}px`,
                    height: `${this.props.heightFrame}px`,
                    transform: `translate(-50%, -50%)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url('${this.props.image}')`,
                    backgroundPosition: `-${this.props.currentWidth}px -${
                        this.props.currentHeight
                    }px`
                }}
            />
        );
    }

    componentDidMount() {
        const update = store.getState().game.update;
        this.timer = 0;
        this.currentWidth = 0;
        this.currentHeight = 0;
        this.currentFrame = 0;
        this.subId = update.subscribe(deltaTime => {
            this.timer += deltaTime;
            if (this.timer > 1000 / this.props.fps) {
                store.dispatch(animateEnemy(this.props));
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
