describe('Pawn', () => {
    const Pawn = require('../src/models/pawn.js');

    class ExtendedPawn extends Pawn {
        constructor(life, strength, def) {
            super(life, strength, def);
        }
    }

    let pawn;
    let life;
    let strength;
    let def;

    beforeEach(() => {
        life = 100;
        strength = 15;
        def = 20;
        pawn = new ExtendedPawn(life, strength, def);
    });

    it('should be able to instance well the Pawn class and add the life, strength and def propreties', () => {
        expect(pawn.life).toEqual(life);
        expect(pawn.strength).toEqual(strength);
        expect(pawn.def).toEqual(def);
    });

    it('should be able to get life proprety', () => {
        let retrievedLife = pawn.getLife();

        expect(retrievedLife).toEqual(life);
    });

    it('should be able to get strength proprety', () => {
        let retrievedStrength = pawn.getStrength();

        expect(retrievedStrength).toEqual(strength);
    });

    it('should be able to get def proprety', () => {
        let retrievedDef = pawn.getDef();

        expect(retrievedDef).toEqual(def);
    });

    it('should be able to attack', () => {
        const opponent = new ExtendedPawn(life, strength, def);

        pawn.attack(opponent);

        expect(pawn.life).toEqual(life-opponent.def);
        expect(opponent.life).toEqual(life-pawn.strength);
    });

    it('should be able to receive an attack', () => {
        const opponent = new ExtendedPawn(life, strength, def);

        pawn.receiveAttack(opponent);

        expect(pawn.life).toEqual(life-opponent.strength);
    });

    it('should be able to receive a counter', () => {
        const opponent = new ExtendedPawn(life, strength, def);

        pawn.receiveAttack(opponent, true);

        expect(pawn.life).toEqual(life-opponent.def);
    });
});