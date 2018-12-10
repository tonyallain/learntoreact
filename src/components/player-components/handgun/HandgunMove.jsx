import React from 'react';
import { connect } from 'react-redux';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/handgun/move/sheet.png';

const HandgunMove = props => {
    return (
        <Spritesheet
            className={'handgun'}
            image={sheet}
            widthFrame={258}
            heightFrame={220}
            steps={20}
            fps={30}
            getInstance={props.getInstance}
            loop={true}
            isResponsive={true}
        />
    );
};

function mapStateToProps(state) {
    return {
        ...state.player
    };
}

export default connect(mapStateToProps)(HandgunMove);
