describe('Deck', () => {
    const Deck = require('../src/models/deck.js');
    let deck;
    let cards;
    beforeEach(() => {
        cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        deck = new Deck({cards});
    });

    it('should be able to shuffle the cards', () => {
        expect(deck.shuffle()).toEqual(true);
    });

    it('should be able to insert a given card at a given position', () => {
        let card = 16;
        let position = (Math.random() * 10).toFixed();

        expect(deck.insertAt(card, position)).toEqual(true);
    });

    it('should be able to pick the first deck card', () => {
        expect(deck.draw()).not.toEqual(false);
    });

    it('should be able to return the cards count', () => {
        expect(deck.getCardsCount()).not.toEqual(false);
    });
});