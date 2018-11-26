let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// converter para false ou true
isAtivo = 1
console.log(!isAtivo)//virou falso
console.log(!!isAtivo)//virou true

console.log('os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"teste")
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || ' '))

let nome1 = ''
console.log(nome1 || 'desconhecido')
let nome2 = 'Lucas'
console.log(nome2 || 'desconhecido')