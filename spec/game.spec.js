describe('Game', () => {
    const Pawn = require('../src/models/pawn.js');
    const Player = require('../src/models/player.js');
    const Deck = require('../src/models/deck.js');
    const Board = require('../src/models/board.js');
    const Hand = require('../src/models/hand.js');
    const Cemetary = require('../src/models/cemetary.js');
    const Game = require('../src/models/game.js');
    let game;
    let up;
    let down;
    let deck;
    let board;
    let hand;
    let cemetary;
    let life;
    let strength;
    let def;

    beforeEach(() => {
        life = (Math.random() * 1000).toFixed();
        strength = (Math.random() * 100).toFixed();
        def = (Math.random() * 100).toFixed();
        deck = new Deck({cards: [1, 2, 3, 4, 5, 6, 7, 8, 9]});
        board = new Board({cards: [11, 12, 13, 14, 15, 16, 17, 18, 19], limit: 20});
        hand = new Hand({cards: [21, 22, 23, 24, 25, 26, 27, 28, 29], limit: 20});
        cemetary = new Cemetary({cards: [31, 32, 33, 34, 35, 36, 37, 38, 39]});
        up = new Player({
            deck,
            hand,
            board,
            cemetary
        });
        life = (Math.random() * 1000).toFixed();
        strength = (Math.random() * 100).toFixed();
        def = (Math.random() * 100).toFixed();
        down = new Player({
            deck,
            hand,
            board,
            cemetary
        });
        game = new Game({up, down});
    });

    it('should be able to instance well the Game class and add the up and dwon properties', () => {
        expect(game.up).toEqual(up);
        expect(game.down).toEqual(down);
    });

    it('should be able to return the current turn (up || down)', () => {
        let currentTurn = game.getTurn();
        expect(['down', 'up'].includes(currentTurn)).toEqual(true);
    });

    it('should be able to change turn', () => {
        let currentTurn = game.getTurn();
        let expectedTurn = currentTurn === 'down' ? 'up': 'down';
        let changedTurn = game.changeTurn();

        expect(changedTurn).toEqual(expectedTurn);
    });

    xit('should be able to pick the first game card and remove it from the cards proprety', () => {
        let cardsCopy = [...game.cards];
        let pickedUpCard = game.draw();

        expect(pickedUpCard).toEqual(cardsCopy[0]);
        expect(game.cards.includes(pickedUpCard)).toEqual(false);
    });

    it('should be able to execute a player method with the parameters sended', () => {
        // here i will test the shuffle method, on the down player, with the parameter "cemetary"
        let cardsCopy = [...game.down.cemetary.cards];

        game.proxy('down', 'shuffle', 'cemetary');
        expect(!cardsCopy.every((v, k) => v === game.down.cemetary.cards[k])).toEqual(true);
    });
});