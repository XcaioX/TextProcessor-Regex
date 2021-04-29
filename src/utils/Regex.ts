import safeRegex from 'safe-regex'

export class InvalidRegexError extends Error {
    constructor(expression: string | RegExp) {
        super(`This ${expression} is not safe!`)
        this.name = 'InvalidRegexError'
    }
}

export const evaluateRegex = (expression: RegExp | string) => {
    if (safeRegex(expression)) return expression
    
    throw new InvalidRegexError(expression)
}