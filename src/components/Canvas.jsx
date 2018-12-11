import React from 'react';
import Player from './player';
import PreloadedAssets from './preload';

const Canvas = () => {
    return (
        <div className="canvas">
            <PreloadedAssets />
            <Player />
        </div>
    );
};

export default Canvas;
