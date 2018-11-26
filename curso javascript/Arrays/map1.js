const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e*2
})
console.log(resultado,nums)

const soma10 = e => e +10
const triplo = e => e*3
const paradinheiro = e => `R$ ${parseFloat(e).toFixed().replace('.',',')}`
resultado = nums.map(soma10).map(triplo).map(paradinheiro)
console.log(resultado)
