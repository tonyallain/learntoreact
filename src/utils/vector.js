export function distance(A, B) {
    return Math.sqrt((B.x - A.x) * (B.x - A.x) + (B.y - A.y) * (B.y - A.y));
}

export function angle(A, B) {
    let adjacent = B.x - A.x;
    let hypotenuse = distance(A, B);
    let angleBetween = Math.acos(adjacent / hypotenuse) / (Math.PI / 180);

    if (B.y - A.y > 0) {
        angleBetween *= -1;
    }

    return angleBetween;
}

export function slope(A, B) {
    return { rise: B.y - A.y, run: B.x - A.x };
}
