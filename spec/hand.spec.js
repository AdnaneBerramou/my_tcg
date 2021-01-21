describe('Hand', () => {
    const Hand = require('../src/models/hand.js');
    let hand;
    let cards;
    let limit = 17;

    beforeEach(() => {
        cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        hand = new Hand({cards, limit});
    });

    it('should be able to instance well the Hand class and add the cards and limit propreties', () => {
        expect(hand.cards).toEqual(cards);
        expect(hand.limit).toEqual(limit);
    });

    it('should be able to add a card', () => {
        let card = 187;

        hand.addCard(card);
        expect(hand.cards.reverse()[0]).toEqual(card);
    });

    it('should be able to remove a card', () => {
        let position = 3;
        let cardToremove = hand.cards[position];
        let removedCard = hand.removeCard(position);

        expect(cardToremove).toEqual(removedCard);
        expect(hand.cards.includes(cardToremove)).toEqual(false);
    });

    it('should be able to retrieve all cards', () => {
        let allCards = hand.getAllCards();

        expect(allCards).toEqual(cards);
    });

    it('should be able to return the cards count', () => {
        let count = hand.getCardsCount();

        expect(count).toEqual(cards.length);
    });
});