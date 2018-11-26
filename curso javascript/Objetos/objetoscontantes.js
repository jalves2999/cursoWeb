const pessoa = { nome: 'joão'}
pessoa.nome = "pedro"
console.log(pessoa)

// pessoa <- 
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João'})
