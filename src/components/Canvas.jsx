import React from 'react';
import Player from './player';
import Enemy from './enemy';
import PreloadedAssets from './preload';
import Controls from './ui/controls';

const Canvas = () => {
    return (
        <div className='canvas'>
            <PreloadedAssets />
            <Controls />
            <Player />
            <Enemy />
        </div>
    );
};

export default Canvas;
