const EventManager = require('../eventManager.js');

class Game extends EventManager {
    constructor (config) {
        super();
        this.up = config.up;
        this.down = config.down;
        this.turn = 'down';
    }

    getTurn() {
        return this.turn;
    }

    changeTurn() {
        this.turn = this.turn === 'down' ? 'up': 'down';
        return this.turn;
    }

    proxy(side, action, payload = null) {
        if (payload === null) {
            return this[side][action]();
        } else {
            return this[side][action](payload);
        }
    }
}

module.exports = Game;