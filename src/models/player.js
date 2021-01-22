const Pawn = require('./pawn.js');

class Player extends Pawn {
    constructor(config) {
        super();
        this.deck = config.deck;
        this.board = config.board;
        this.hand = config.hand;
        this.cemetary = config.cemetary;
    }

    shuffle(type = 'deck') {
        if (!['deck', 'cemetary'].includes(type)) return false;

        return this[type].shuffle();
    }

    draw() {
        return this.deck.draw();
    }

    playCard(position) {
        const card  = this.hand.removeCard(position);

        if (card) {
            return this.board.addCard(card);
        } else {
            return false;
        }
    }

    discard(position) {
        const card  = this.hand.removeCard(position);

        if (card) {
            return this.cemetary.insertAt(card);
        } else {
            return false;
        }
    }

    attack(position, target) {
        let card = this.board.cards[position];

        if (card !== undefined) {
            card.attack(target);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Player;