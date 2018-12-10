import React, { Component } from 'react';
import { connect } from 'react-redux';
import handgunMove from '../../assets/Top_Down_Survivor/handgun/move/sheet.png';
import handleMovement from './movement';

const Player = props => {
    return (
        <div
            style={{
                position: 'fixed',
                left: props.position[0],
                top: props.position[1],
                backgroundImage: `url('${handgunMove}')`,
                backgroundPosition: '0 0',
                width: '258px',
                height: '220px'
            }}
        />
    );
};

function mapStateToProps(state) {
    return {
        ...state.player
    };
}

export default connect(mapStateToProps)(handleMovement(Player));
