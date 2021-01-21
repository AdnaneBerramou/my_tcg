import 'babel-polyfill';

import ArenaController from './controllers/arena';

class main {
    constructor() {

        new ArenaController()

    }
}

module.exports = new main()