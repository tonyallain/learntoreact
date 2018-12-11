import React from 'react';
import HiddenImage from './HiddenImage';
import { KnifeBundle } from '../../assets/bundles/knife_bundle';

const KnifePreload = props => {
    return (
        <div>
            {KnifeBundle.map((file, i) => {
                return <HiddenImage src={file} key={i} />;
            })}
        </div>
    );
};

export default KnifePreload;
