import React from 'react';
import HiddenImage from './HiddenImage';
import { HandgunBundle } from '../../assets/bundles/handgun_bundle';

const HandgunPreload = props => {
    return (
        <div>
            {HandgunBundle.map((file, i) => {
                return <HiddenImage src={file} key={i} />;
            })}
        </div>
    );
};

export default HandgunPreload;
