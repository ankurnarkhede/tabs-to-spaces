const assert = require('assert')
const tabToSpace = require('./index')

describe('Tabs to spaces', () => {
  it('should return text indented by spaces', () => {
    const text = '\t\t[FirstName]\t\t\t\t=> TEST\n' +
      '        [LastName]              => TEST\n'
    assert.strictEqual(tabToSpace(text, 4),
      '        [FirstName]             => TEST\n' +
      '        [LastName]              => TEST\n')
  })
})
