import React from 'react';
import { connect } from 'react-redux';
import sheet from '../../assets/Top_Down_Survivor/feet/run/sheet.png';
import store from '../../store';
import { animatePlayer, triggerAnimation } from '../../actions/player-actions';

class Bottom extends React.Component {
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
                    backgroundImage: `url('${sheet}')`,
                    backgroundPosition: `-${this.props.currentWidth}px -${
                        this.props.currentHeight
                    }px`
                }}
            />
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
                    // store.dispatch(animatePlayer(this.props));
                    //this.props.updateAnim();
                    // this.updateAnimation();
                    // this.props.updateAnim();
                    console.log(this.props);
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

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateAnim: () => {
            dispatch(animatePlayer(ownProps));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bottom);
