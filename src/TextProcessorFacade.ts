import { TextProcessorFluentAPI } from "./services/TextProcessorFluentAPI";

export class TextProcessorFacade {
    private textProcessorFluentAPI

    constructor(text: unknown) {
        this.textProcessorFluentAPI = new TextProcessorFluentAPI(text)
    }

    getPeopleFromPDF() {
        return this.textProcessorFluentAPI
                    .extractPeopleData()
                    .divideTextInColumns()
                    .removeEmptyCharacters()
                    .removeDots()
                    .mapPerson()
                    .build()
    }
}