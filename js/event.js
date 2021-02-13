//observer pattern realization
export class Event {
    constructor() {
        this._listeners = [];
    }

    attach(listener) {
        this._listeners.push(listener);
    }

    notify(args) {
        this._listeners.forEach(listener => listener(args));
    }
}