import React from 'react';
import { connect } from 'react-redux';
import testSheet from '../../assets/Top_Down_Survivor/handgun/meleeattack/sheet.png';

const Player = props => {
    return (
        <div
            style={{
                position: 'absolute',
                left: props.position[0],
                top: props.position[1],
                width: '256px',
                height: '256px',
                border: '2px solid black',
                transformOrigin: 'top left',
                transform: `rotate(${props.rotation}deg) scale(${
                    props.scale
                }) translate(-50%, -50%)`,
                backgroundImage: `url('${testSheet}')`,
                backgroundPosition: `0px 0px`
            }}
        />
    );
};

function mapStateToProps(state) {
    return {
        ...state.player
    };
}

export default connect(mapStateToProps)(Player);
