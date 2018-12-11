import React from 'react';

const HiddenImage = props => {
    return <img src={props.src} style={{ display: 'none' }} alt="" />;
};

export default HiddenImage;
