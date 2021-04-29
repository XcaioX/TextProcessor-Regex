import { evaluateRegex } from "../utils/Regex"

export class Person {

    private nome: string
    private nacionalidade: string
    private estadoCivil: string
    private documento: string
    private rua: string
    private numero: string
    private bairro: string
    private estado: string

    constructor([
        nome,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado
    ]: string[]) {
        this.nome = nome
        this.nacionalidade = this.formatFirstLetter(nacionalidade)
        this.estadoCivil = this.formatFirstLetter(estadoCivil)
        this.documento = this.removeLettersAndSpecialCharacters(documento)
        this.rua = this.sanitizeAddress(rua)
        this.numero = numero
        this.bairro = this.sanitizeNeighborhood(bairro)
        this.estado = estado
    }

    formatFirstLetter(text: string): string {
        const regex = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
        return text.replace(regex, (fullMatch: string, group1: string, group2: string) => {
            return `${group1.toUpperCase()}${group2.toLowerCase()}`
        })
    }

    removeLettersAndSpecialCharacters(text: string): string {
        const regex = evaluateRegex(/\D/g)
        return text.replace(regex, '')
    }

    sanitizeAddress(text: string): string {
        const regex = evaluateRegex(/(rua|avenida).*$/i)
        return text.match(regex) ? (text.match(regex) as string[])[0] : ''
    }

    sanitizeNeighborhood(text: string): string {
        const regex = evaluateRegex(/^\s?(bairro)\s?\n?/)
        return text.replace(regex, '')
    }
}