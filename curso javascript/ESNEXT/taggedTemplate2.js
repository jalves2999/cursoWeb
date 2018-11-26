function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.isFixed(2)}`
        resultado.push()
    })
    return resultado.join('')
}
const preco = 29.99
const proceparcela = 11
console.log(real `1x de ${preco} ou 3x de ${proceparcela}`)