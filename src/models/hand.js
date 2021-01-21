class Hand {
    constructor(config) {
        this.cards = config.cards;
        this.limit = config.limit || 7;
    }

    addCard(card) {
        if (!Array.isArray(this.cards) || this.cards.length >= this.limit) return false;
        this.cards.push(card);

        let cardsCopy = [...this.cards];

        return cardsCopy.pop() === card ? true: false;
    }

    removeCard(position) {
        let cardToremove = this.cards[position];

        if (!Array.isArray(this.cards) || cardToremove === undefined) return false;

        let removed = this.cards.splice(position, 1);

        return removed.length === 1 ? removed[0] : false;
    }

    getAllCards() {
        return Array.isArray(this.cards) ? this.cards : false;
    }

    getCardsCount () {
        return Array.isArray(this.cards) ? this.cards.length : false;
    }
}

module.exports = Hand;