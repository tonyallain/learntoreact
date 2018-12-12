export const getNextFrame = anim => {
    if (anim.currentFrame >= anim.steps) {
        // maybe we can dispatch an event here to notify an anim has completed?
        return { ...anim, currentFrame: 0, isAnimating: anim.loop };
    } else {
        const currentColumn = anim.currentFrame % anim.cols;
        const currentRow = Math.floor(anim.currentFrame / anim.cols);
        const nextFrame = anim.currentFrame + 1;

        const newWidth = anim.widthFrame * currentColumn;
        const newHeight = anim.heightFrame * currentRow;

        const currentSlice = {
            currentWidth: newWidth,
            currentHeight: newHeight,
            currentFrame: nextFrame
        };

        return currentSlice;
    }
};
