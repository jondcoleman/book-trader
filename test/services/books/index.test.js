'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('books service', function() {
  it('registered the books service', () => {
    assert.ok(app.service('books'));
  });
});
