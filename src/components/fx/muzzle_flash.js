import React from 'react';
import FlashImage from '../../assets/fx/muzzle_flash.png';
import { connect } from 'react-redux';

const MuzzleFlash = props => {
    return (
        <img
            src={FlashImage}
            style={{
                position: 'fixed',
                left: `${props.x}%`,
                top: `${props.y}%`,
                transform: `scale(${props.scale}) translate(50%, 0%)`
            }}
            hidden={props.hidden}
        />
    );
};

function mapStateToProps(state) {
    return {
        ...state.muzzle
    };
}

export default connect(mapStateToProps)(MuzzleFlash);
