console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', "Carlos", 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abioa')//adiciona outra linra
console.log(aprovados.length)
console.log(aprovados)
aprovados[9] = "rafael"
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]//não reordena
console.log(aprovados[1])
console.log(aprovados[2])

aprovadores = ['bia','carlos','ana']
aprovados.splice(1,2,'elt1','elt2')
console.log(aprovados)