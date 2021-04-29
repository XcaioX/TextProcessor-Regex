import { describe, it } from 'mocha'
import { expect } from 'chai'

import { evaluateRegex, InvalidRegexError } from '../../src/utils/Regex'

describe('Util', () => {
    it('EvaluateRegex should throw an error using an unsafe regex', () => {
        const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/
        expect(() => evaluateRegex(unsafeRegex)).to.throw()
    })

    it('EvaluateRegex should not throw an error using a safe regex', () => {
        const safeRegex = /^([a-z])$/
        expect(() => evaluateRegex(safeRegex)).to.not.throw
        expect(evaluateRegex(safeRegex)).to.be.ok
    })
})