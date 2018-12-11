import React from 'react';
import HiddenImage from './HiddenImage';
import { FeetBundle } from '../../assets/bundles/feet_bundle';

const FeetPreload = props => {
    return (
        <div>
            {FeetBundle.map((file, i) => {
                return <HiddenImage src={file} key={i} />;
            })}
        </div>
    );
};

export default FeetPreload;
