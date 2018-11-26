//object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel',Object.isExtensible(produto))

produto.nome = "borracha"
produto.descricao = 'borracha escolar'
delete produto.tag
console.log(produto)

//object.seal
const pessoa = { nome: 'julinana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = "silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Objeti,freeze = selado + constantes
