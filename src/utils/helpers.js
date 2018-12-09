export function getVariance(from, amount) {
    const randomSpeed = Math.random() * amount;
    const plusOrMinus = Math.random() <= 0.5 ? 1 : -1;
    const variance = from + randomSpeed * plusOrMinus;

    return variance;
}

export function spawnPosition() {
    // spawn at the top/bottom or left/right
    const topside = Math.random() <= 0.5; //top or sides
    const maximum = Math.random() <= 0.5; // on the 0 or inner* side

    let x, y;
    if (topside) {
        // we're going to random x along width
        x = Math.random() * window.innerWidth;
        // pick which side y is on
        y = maximum ? window.innerHeight + 100 : -100;
    } else {
        // we're going to random y along height
        y = Math.random() * window.innerHeight;
        // pick which side x is on
        x = maximum ? window.innerWidth + 100 : -100;
    }

    return { x, y };
}
