import React from 'react';
import HiddenImage from './HiddenImage';
import { ShotgunBundle } from '../../assets/bundles/shotgun_bundle';

const ShotgunPreload = props => {
    return (
        <div>
            {ShotgunBundle.map((file, i) => {
                return <HiddenImage src={file} key={i} />;
            })}
        </div>
    );
};

export default ShotgunPreload;
