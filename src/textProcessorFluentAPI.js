const { evaluateRegex } = require("./util")
const Person = require('./person')

class TextProcessorFluentAPI {

    #content
    constructor(content) {
        this.#content = content
    }

    extractPeopleData() {
        const matchPerson = evaluateRegex(/(?<=[contrata{nte|ada}]:\s{1})(?!\s)(.*\n.*?)$/gmi)
        const onlyPerson = this.#content.match(matchPerson)
        this.#content = onlyPerson
        return this
    }

    divideTextInColumns() {
        const splitRegex = evaluateRegex(/,/)
        this.#content = this.#content.map(line => line.split(splitRegex))
        return this
    }

    removeEmptyCharacters() {
        const trimSpaces = evaluateRegex(/^\s+|\s+$|\n/g)
        this.#content = this.#content.map(line => line.map(item => item.replace(trimSpaces, '')))
        return this
    }

    mapPerson() {
        this.#content = this.#content.map(line => new Person(line))
        return this
    }

    build() {
        return this.#content 
    }
}

module.exports = TextProcessorFluentAPI