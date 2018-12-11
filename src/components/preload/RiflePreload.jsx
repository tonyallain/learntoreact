import React from 'react';
import HiddenImage from './HiddenImage';
import { RifleBundle } from '../../assets/bundles/rifle_bundle';

const RiflePreload = props => {
    return (
        <div>
            {RifleBundle.map((file, i) => {
                return <HiddenImage src={file} key={i} />;
            })}
        </div>
    );
};

export default RiflePreload;
