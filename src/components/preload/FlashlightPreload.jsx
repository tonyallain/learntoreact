import React from 'react';
import HiddenImage from './HiddenImage';
import { FlashlightBundle } from '../../assets/bundles/flashlight_bundle';

const FlashlightPreload = props => {
    return (
        <div>
            {FlashlightBundle.map((file, i) => {
                return <HiddenImage src={file} key={i} />;
            })}
        </div>
    );
};

export default FlashlightPreload;
