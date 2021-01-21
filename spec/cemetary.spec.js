describe('Cemetary', () => {
    const Cemetary = require('../src/models/cemetary.js');
    let cemetary;
    let cards;

    beforeEach(() => {
        cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        cemetary = new Cemetary({cards});
    });

    it('should be able to instance well the Cemetary class and add the cards proprety', () => {
        expect(cemetary.cards).toEqual(cards);
    });

    it('should be able to shuffle the cards', () => {
        let cardsCopy = [...cemetary.cards];

        cemetary.shuffle();
        expect(!cardsCopy.every((v, k) => v === cemetary.cards[k])).toEqual(true);
    });

    it('should be able to insert a given card at a given position', () => {
        let card = 16;
        let position = (Math.random() * 10).toFixed();

        cemetary.insertAt(card, position);
        expect(cemetary.cards[position]).toEqual(card);
    });

    it('should be able to pick the first cemetary card and remove it from the cards proprety', () => {
        let cardsCopy = [...cemetary.cards];
        let pickedUpCard = cemetary.draw();

        expect(pickedUpCard).toEqual(cardsCopy[0]);
        expect(cemetary.cards.includes(pickedUpCard)).toEqual(false);
    });

    it('should be able to return the cards count', () => {
        let count = cemetary.getCardsCount();

        expect(count).toEqual(cards.length);
    });
});