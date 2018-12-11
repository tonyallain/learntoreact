import React from 'react';
import HiddenImage from './HiddenImage';
import { EnemyBundle } from '../../assets/bundles/enemy_bundle';

const EnemyPreload = props => {
    return (
        <div>
            {EnemyBundle.map((file, i) => {
                return <HiddenImage src={file} key={i} />;
            })}
        </div>
    );
};

export default EnemyPreload;
