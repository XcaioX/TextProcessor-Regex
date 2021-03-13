const { evaluateRegex } = require('./util')

class Person {

    constructor([
        name,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado
    ]) {
        
        const firstLetterExp = evaluateRegex(/^(\w{1})([a-z|A-Z]+$)/g)
        const formatFirstLetter = (prop) => {
            return prop.replace(firstLetterExp, (_fullMatch, group1, group2, _index) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`
            })
        }

        this.name = name
        this.nacionalidade = formatFirstLetter(nacionalidade)
        this.estadoCivil = formatFirstLetter(estadoCivil)
        this.documento = documento.replace(evaluateRegex(/\D/g), "")
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join('')
        this.numero = numero
        this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join('')
        this.estado = estado.replace(evaluateRegex(/\.$/), '')
    }
}

module.exports = Person