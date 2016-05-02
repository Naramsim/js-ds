const assert = require('assert');
const Stack = require('../src/stack');

const stack = new Stack();

describe('Stack', () => {
  it('operations, isEmpty, push, pop', () => {
    assert.ok(stack.isEmpty());
    stack.push(1);
    stack.push();
    assert.equal(stack.pop(), 1);
    assert.equal(stack.pop(), undefined);
  });
});
