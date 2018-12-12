import React from 'react';
import Player from './player';
import Enemy from './enemy';
import PreloadedAssets from './preload';

const Canvas = () => {
    return (
        <div className="canvas">
            <PreloadedAssets />
            <Player />
            <Enemy />
        </div>
    );
};

export default Canvas;
