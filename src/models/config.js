const GameModel = require('./game.js');
const DeckModel = require('./deck.js');
const PlayerModel = require('./player.js');

module.exports = {
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    }
}