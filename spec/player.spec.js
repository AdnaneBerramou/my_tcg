describe('Player', () => {
    const Pawn = require('../src/models/pawn.js');
    const Player = require('../src/models/player.js');
    const Deck = require('../src/models/deck.js');
    const Board = require('../src/models/board.js');
    const Hand = require('../src/models/hand.js');
    const Cemetary = require('../src/models/cemetary.js');
    let player;
    let deck;
    let board;
    let hand;
    let cemetary;
    let life;
    let strength;
    let def;

    class ExtendedPawn extends Pawn {
        constructor(life, strength, def) {
            super(life, strength, def);
        }
    }

    beforeEach(() => {
        life = (Math.random() * 1000).toFixed();
        strength = (Math.random() * 100).toFixed();
        def = (Math.random() * 100).toFixed();
        deck = new Deck({cards: [1, 2, 3, 4, 5, 6, 7, 8, 9]});
        board = new Board({cards: [11, 12, 13, 14, 15, 16, 17, 18, 19], limit: 20});
        hand = new Hand({cards: [21, 22, 23, 24, 25, 26, 27, 28, 29], limit: 20});
        cemetary = new Cemetary({cards: [31, 32, 33, 34, 35, 36, 37, 38, 39]});
        player = new Player({
            deck,
            hand,
            board,
            cemetary
        });
    });

    it('should be able to instance well the Player class and add a deck proprety (instance of Deck class)', () => {
        expect(player.deck).toEqual(deck);
    });

    it('should be able to shuffle the cards', () => {
        let type = 'deck';
        const cardsCopy = [...player[type].cards];

        player.shuffle(type);
        expect(!cardsCopy.every((v, k) => v === player[type].cards[k])).toEqual(true);
    });


    it('should be able to pick the first deck card and remove it from the cards', () => {
        let cardsCopy = [...player.deck.cards];
        let pickedUpCard = player.draw();

        expect(pickedUpCard).toEqual(cardsCopy[0]);
        expect(player.deck.cards.includes(pickedUpCard)).toEqual(false);

    });

    it('should be able to play card (remove it from hand and add it in board)', () => {
        let playedCard = player.hand.cards[4];

        player.playCard(4);

        expect(player.hand.cards.includes(playedCard)).toEqual(false);
        expect(player.board.cards.includes(playedCard)).toEqual(true);
    });

    it('should be able to discard (move a card from hand to cemetary)', () => {
        let discardedCard = player.hand.cards[4];

        player.discard(4);

        expect(player.hand.cards.includes(discardedCard)).toEqual(false);
        expect(player.cemetary.cards.includes(discardedCard)).toEqual(true);
    });

    it('should be able to attack', () => {
        let position = (Math.random() * 10).toFixed();
        let testCard = new ExtendedPawn(life, strength, def);
        let opponent = new ExtendedPawn(life, strength, def);
        player.board.cards[position] = testCard;

        player.attack(position, opponent);

        expect(player.board.cards[position].life).toEqual(life-opponent.def);
        expect(opponent.life).toEqual(life-player.board.cards[position].strength);
    });
});