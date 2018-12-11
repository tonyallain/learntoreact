import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { animateTop } from '../../actions/player-actions';
import MuzzleFlash from '../fx/muzzle_flash';

class Top extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        position: 'absolute',
                        left: `${50 + this.props.adjust[0]}%`,
                        top: `${50 + this.props.adjust[1]}%`,
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
                <MuzzleFlash />
            </div>
        );
    }

    componentDidMount() {
        // we want to subscribe to the states update renderer
        const storeState = store.getState();
        const update = storeState.game.update;
        this.timer = 0;

        // we also want to sub my animation
        this.animId = update.subscribe(deltaTime => {
            if (this.props.isAnimating) {
                this.timer += deltaTime;
                if (this.timer > 1000 / this.props.fps) {
                    this.timer = 0;
                    store.dispatch(animateTop(this.props));
                }
            }
        });
    }

    componentWillUnmount() {
        // we need to unregister
        const storeState = store.getState();
        const update = storeState.game.update;

        update.unsubscribe(this.animId);
    }
}

function mapStateToProps(state) {
    return {
        ...state.top
    };
}

export default connect(mapStateToProps)(Top);
