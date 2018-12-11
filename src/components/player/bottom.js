import React from 'react';
import { connect } from 'react-redux';
import testSheet2 from '../../assets/Top_Down_Survivor/feet/run/sheet.png';
import store from '../../store';
import { animatePlayer, triggerAnimation } from '../../actions/player-actions';

class Bottom extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: `100%`,
                        height: `100%`,
                        transformOrigin: 'top left',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url('${testSheet2}')`,
                        backgroundPosition: `-${this.props.currentWidth}px -${
                            this.props.currentHeight
                        }px`
                    }}
                />
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
                    store.dispatch(animatePlayer(this.props));
                }
            }
        });
    }

    componentWillUnmount() {
        // we need to unregister
        const storeState = store.getState();
        const input = storeState.game.input;
        const update = storeState.game.update;

        update.unsubscribe(this.animId);
    }
}

function mapStateToProps(state) {
    return {
        ...state.bottom
    };
}

export default connect(mapStateToProps)(Bottom);
