import ModelFactory from './factory';

module.exports = class Player {

    constructor(config) {
        this.type = config.type;

        this.deck = ModelFactory.get('deck');
    }

    draw () {
        return this.deck.draw();
    }



}