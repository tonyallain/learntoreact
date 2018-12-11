import React from 'react';
import HandgunPreload from './HandgunPreload';
import ShotgunPreload from './ShotgunPreload';
import RiflePreload from './RiflePreload';
import KnifePreload from './KnifePreload';
import FlashlightPreload from './FlashlightPreload';
import FeetPreload from './FeetPreload';
import EnemyPreload from './EnemyPreload';

const PreloadedAssets = props => {
    return (
        <div>
            <HandgunPreload />
            <ShotgunPreload />
            <RiflePreload />
            <KnifePreload />
            <FlashlightPreload />
            <FeetPreload />
            <EnemyPreload />
        </div>
    );
};

export default PreloadedAssets;
