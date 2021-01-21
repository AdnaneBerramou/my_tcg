const EventManager = require('../eventManager.js');

class Pawn extends EventManager {
    constructor(life, strength, def) {
        super();
        if (this.constructor == Pawn) {
            throw new Error("Abstract classes can't be instantiated.");
        } else {
            this.life = life;
            this.strength = strength;
            this.def = def;
        }
    }

    getLife() {
        return this.life;
    }

    getStrength() {
        return this.strength;
    }

    getDef() {
        return this.def;
    }

    attack(opponent) {
        opponent.receiveAttack(this);
    }

    receiveAttack(opponent, strikeBack = false) {
        if (strikeBack === true) {
            this.life-=opponent.def;
        } else {
            this.life-=opponent.strength;
            opponent.receiveAttack(this, true);
        }
    }
}

module.exports = Pawn;