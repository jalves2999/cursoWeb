const valores = [7,8,6,7.2,8.6]
// acesso aos numeros começa em 0
console.log(valores[0], valores[3])

valores[5] = 10
console.log(valores)
console.log('quantos elementos tem no array ' + valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)