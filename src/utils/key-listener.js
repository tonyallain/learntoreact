export default class KeyListener {
    constructor() {
        this.subscribers = [];
        this.lastTimestamp = new Date();
        this.currentTimestamp = new Date();
        this.deltaTime = 0;
        this.keys = {};
        this.mousePos = [0, 0];

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.isDown = this.isDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.hideContext = this.hideContext.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    onKeyDown(e) {
        e.preventDefault();

        this.keys[e.key] = true;
        console.log(e.key + ' DOWN');
    }

    onKeyUp(e) {
        e.preventDefault();

        this.keys[e.key] = false;
        console.log(e.key + ' UP');
    }

    isDown(key) {
        return this.keys[key] || false;
    }

    onMouseMove(e) {
        e.preventDefault();

        this.mousePos = [e.clientX, e.clientY];
        console.log(this.mousePos);
    }

    getMousePos() {
        return this.mousePos;
    }

    onMouseUp(e) {
        e.preventDefault();

        this.subscribers.forEach(callback => {
            callback(e);
        });
        console.log(e);
    }

    hideContext(e) {
        e.preventDefault();
    }

    start() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('contextmenu', this.hideContext);
    }

    stop() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('contextmenu', this.hideContext);
    }

    subscribe(callback) {
        return this.subscribers.push(callback);
    }

    unsubscribe(id) {
        this.subscribers.splice(id - 1, 1);
    }
}
