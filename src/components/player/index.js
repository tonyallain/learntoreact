import React from 'react';
import { connect } from 'react-redux';
import handgunMove from '../../assets/Top_Down_Survivor/handgun/move/sheet.png';
import handleMovement from './movement';
import HandgunMove from '../player-components/handgun/HandgunMove';

const Player = props => {
    return (
        <div
            style={{
                position: 'fixed',
                left: props.position[0],
                top: props.position[1]
            }}
        >
            <HandgunMove getInstance={props.getInstance} />
        </div>
    );
};

function mapStateToProps(state) {
    return {
        ...state.player
    };
}

export default connect(mapStateToProps)(handleMovement(Player));
