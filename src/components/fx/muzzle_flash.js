import React from 'react';
import FlashImage from '../../assets/fx/muzzle_flash.png';
import { connect } from 'react-redux';
import store from '../../store';
import { flashMuzzle } from '../../actions/player-actions';

class MuzzleFlash extends React.Component {
    render() {
        return (
            <img
                src={FlashImage}
                style={{
                    position: 'fixed',
                    left: `${this.props.x}%`,
                    top: `${this.props.y}%`,
                    transform: `scale(${this.props.scale}) translate(50%, 0%)`,
                    opacity: 0.5
                }}
                hidden={this.props.hidden}
                alt=""
            />
        );
    }

    componentDidMount() {
        const update = store.getState().game.update;
        this.timer = 0;

        this.updateId = update.subscribe(deltaTime => {
            if (!this.props.hidden) {
                this.timer += deltaTime;
                if (this.timer > 50) {
                    store.dispatch(flashMuzzle(0, true));
                    this.timer = 0;
                }
            }
        });
    }

    componentWillUnmount() {
        const update = store.getState().game.update;

        update.unsubscribe(this.updateId);
    }
}

function mapStateToProps(state) {
    return {
        ...state.muzzle
    };
}

export default connect(mapStateToProps)(MuzzleFlash);
