describe('Deck', () => {
    const Deck = require('../src/models/deck.js');
    let deck;
    let cards;

    beforeEach(() => {
        cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        deck = new Deck({cards});
    });

    it('should be able to instance well the Deck class and add the cards proprety', () => {
        expect(deck.cards).toEqual(cards);
    });

    it('should be able to shuffle the cards', () => {
        let cardsCopy = [...deck.cards];

        deck.shuffle();
        expect(!cardsCopy.every((v, k) => v === deck.cards[k])).toEqual(true);
    });

    it('should be able to insert a given card at a given position', () => {
        let card = 16;
        let position = (Math.random() * 10).toFixed();

        deck.insertAt(card, position);
        expect(deck.cards[position]).toEqual(card);
    });

    it('should be able to pick the first deck card and remove it from the cards proprety', () => {
        let cardsCopy = [...deck.cards];
        let pickedUpCard = deck.draw();

        expect(pickedUpCard).toEqual(cardsCopy[0]);
        expect(deck.cards.includes(pickedUpCard)).toEqual(false);
    });

    it('should be able to return the cards count', () => {
        let count = deck.getCardsCount();

        expect(count).toEqual(cards.length);
    });
});