const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('Saves a user', () => {
        // assert( 1 + 1 === 3);
        const joe = new User ({ name: 'Joe' });

        joe.save();
    });
});