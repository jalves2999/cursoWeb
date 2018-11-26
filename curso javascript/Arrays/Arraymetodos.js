const pilotos = ['vettel','alonso', 'raikkonen','massa']
pilotos.pop()//massa saiu
console.log(pilotos)

pilotos.push('vertappen')
console.log(pilotos)

pilotos.shift()//remove primeiro da lista
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

pilotos.splice(2,0,'bottas','massa')//bottas entrou
console.log(pilotos)

pilotos.splice(3,1)//massa saiu
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2)
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1,4)
console.log(algunspilotos2)