import { Person } from '../models/Person'
import { evaluateRegex } from '../utils/Regex'


export class TextProcessorFluentAPI {
    
    constructor(
        private content: unknown
    ) {}
    
    extractPeopleData(): TextProcessorFluentAPI {
        const matchPerson = evaluateRegex(/(?<=[contrata{nte|ada}]:\s{1})(?!\s)(.*\n.*)$/gmi)
        const onlyPerson = (this.content as string).match(matchPerson) as string[]

        this.content = onlyPerson
        return this
    }

    divideTextInColumns(): TextProcessorFluentAPI {
        const splitRegex = evaluateRegex(/,/)
        this.content = (this.content as string[]).map(line => line.split(splitRegex))
        return this
    }

    removeEmptyCharacters(): TextProcessorFluentAPI {
        const trimSpaces = evaluateRegex(/^\s|\s+$|\n/g)
        this.content = (this.content as Array<Array<string>>).map(columns => columns.map(line => line.replace(trimSpaces, ''))) 
        return this
    }

    removeDots(): TextProcessorFluentAPI {
        const removeDot = evaluateRegex(/\.$/)
        this.content = (this.content as Array<Array<string>>).map(columns => columns.map(line => line.replace(removeDot, '')))
        return this
    }

    mapPerson(): TextProcessorFluentAPI {
        this.content = (this.content as Array<Array<string>>).map(line => new Person(line))
        return this
    }

    build(): unknown {
        return this.content
    }
}

// 