const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.React)
console.log(tecnologias.get('React').framework)

const chavesVariadas = new Map([
    [function(){}, 'funcção'],
    [{}, 'Objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))//true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))//false
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)