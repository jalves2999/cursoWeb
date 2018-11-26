let valor // não inicializada
console.log(valor)
//console.log(valor2) da erro
valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) sempre associar variável
 const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir de forma explicita
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)