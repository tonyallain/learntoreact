export default class GameLoop {
    constructor() {
        this.subscribers = [];
        this.loopID = null;
        this.loop = this.loop.bind(this);
        this.lastTimestamp = new Date();
        this.currentTimestamp = new Date();
        this.deltaTime = 0;
    }

    loop() {
        this.currentTimestamp = new Date();
        this.deltaTime = this.currentTimestamp - this.lastTimestamp;
        this.lastTimestamp = new Date();
        if (this.deltaTime < 0) {
            throw new Error('NEGATIVE TIME');
        }

        this.subscribers.forEach(callback => {
            callback(this.deltaTime);
        });

        this.loopID = window.requestAnimationFrame(this.loop);
    }

    start() {
        if (!this.loopID) {
            this.loop();
        }
    }

    stop() {
        if (!this.loopID) {
            window.cancelAnimationFrame(this.loopID);
            this.loopID = null;
        }
    }

    subscribe(callback) {
        return this.subscribers.push(callback);
    }

    unsubscribe(id) {
        this.subscribers.splice(id - 1, 1);
    }
}
