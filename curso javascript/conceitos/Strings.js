const escola = "coder"

console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))

console.log(escola.charCodeAt(3))
console.log(escola.indexOf(3))
console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola'.concat(escola).concat('!'))
console.log(escola.replace(4,'e'))

console.log("Ana, Maria,Pedro".split(','))

const nome = "Rebeca"
const concatenacao = "ola " + nome + "!"

console.log(concatenacao)

// modos com templatestring
const template = `
    Olá
    ${nome}!`
    //espressoes (usar crase)
    console.log(`1+1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase()
    console.log(`Ei ... ${up('Cuidado')}!`)