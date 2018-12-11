export function distance(A, B) {
    return Math.sqrt(
        (B[0] - A[0]) * (B[0] - A[0]) + (B[1] - A[1]) * (B[1] - A[1])
    );
}

export function angle(A, B) {
    let adjacent = B[0] - A[0];
    let hypotenuse = distance(A, B);
    let angleBetween = Math.acos(adjacent / hypotenuse) / (Math.PI / 180);

    if (B[1] - A[1] < 0) {
        angleBetween *= -1;
    }

    return angleBetween;
}

export function slope(A, B) {
    return { rise: B[1] - A[1], run: B[0] - A[0] };
}
