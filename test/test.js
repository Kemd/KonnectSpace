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

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});