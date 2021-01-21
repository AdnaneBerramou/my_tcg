class Deck {
    constructor (config) {
        this.cards = config.cards;
    }

    shuffle () {
        let beforeShuffle = [...this.cards];

        for (let i = 0; i < 5; i++) this.cards.sort(() => Math.random() - 0.5);

        return !beforeShuffle.every((v, k) => v === this.cards[k]);
    }

    insertAt(card, position) {
        this.cards.splice(position, 0, card);

        return this.cards[position] === card ? true : false;
    }

    draw () {
        return this.cards.length !== 0 ? this.cards.shift() : false;
    }

    getCardsCount () {
        return Array.isArray(this.cards) ? this.cards.length : false;
    }
}

module.exports = Deck;