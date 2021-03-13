const TextProcessorFluentAPI = require('./textProcessorFluentAPI')

class TextProcessorFacade {
    
    #textProcessorFacade
    constructor(text) {
        this.#textProcessorFacade = new TextProcessorFluentAPI(text)
    }

    getPeopleFromPDF() {
        return this.#textProcessorFacade
                    .extractPeopleData()
                    .divideTextInColumns()
                    .removeEmptyCharacters()
                    .mapPerson()
                    .build()
    }
}

module.exports = TextProcessorFacade