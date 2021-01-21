describe('Board', () => {
    const Board = require('../src/models/board.js');
    let board;
    let cards;
    let limit = 17;

    beforeEach(() => {
        cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        board = new Board({cards, limit});
    });

    it('should be able to instance well the Board class and add the cards and limit propreties', () => {
        expect(board.cards).toEqual(cards);
        expect(board.limit).toEqual(limit);
    });

    it('should be able to add a card', () => {
        let card = 187;

        board.addCard(card);
        expect(board.cards.reverse()[0]).toEqual(card);
    });

    it('should be able to remove a card', () => {
        let position = 3;
        let cardToremove = board.cards[position];
        let removedCard = board.removeCard(position);

        expect(cardToremove).toEqual(removedCard);
        expect(board.cards.includes(cardToremove)).toEqual(false);
    });

    it('should be able to retrieve all cards', () => {
        let allCards = board.getAllCards();

        expect(allCards).toEqual(cards);
    });

    it('should be able to return the cards count', () => {
        let count = board.getCardsCount();

        expect(count).toEqual(cards.length);
    });
});