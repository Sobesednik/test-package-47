const assert = require('assert')
const context = require('../context/')
const testPackage_47 = require('../../src/')

const testPackage_47TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_47, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_47()
        })
    },
}

module.exports = testPackage_47TestSuite
