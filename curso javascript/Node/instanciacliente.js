const contadorA = require('./instanciaunica')
const contadorB = require('./instanciaunica')

const contadorc = require('./instanciaNova')
const contadorD = require('./instanciaNova')

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorc.inc()
contadorc.inc()
console.log(contadorD.valor)