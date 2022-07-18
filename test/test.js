const chai = require('chai');
const assert = chai.assert;
const user = require('../models/user')
const post = require('../models/Post')

// test cases 
describe('My users', () => {
    it('A user model should exist', () => {
        assert.exists(user, 'Users exists')
    })
})

describe('Users posts', () => {
    it('Posts should exist', () => {
        assert.exists(post, 'Posts are available')
    })
})