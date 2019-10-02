const assert = require('assert');
const tab_to_space = require('./index')

describe('Tabs to spaces', () => {
  it('should return text indented by spaces', () => {
    let text = '\t\t[FirstName]\t\t\t\t=> TEST\n' +
      '        [LastName]              => TEST\n'
    assert.strictEqual(tab_to_space(text, 4),
      '        [FirstName]             => TEST\n' +
      '        [LastName]              => TEST\n');
  });
});
