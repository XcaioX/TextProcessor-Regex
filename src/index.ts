import { readFile } from 'fs/promises'
import { join } from 'path'
import pdf from 'pdf-parse'

;import { TextProcessorFacade } from './TextProcessorFacade';
(async () => {
    const dataBuffer = await readFile(join(__dirname, '..', 'docs', 'contract.pdf'))
    const data = (await pdf(dataBuffer)).text

    const facade = new TextProcessorFacade(data)
    const people = facade.getPeopleFromPDF()
    console.log(people)
})()