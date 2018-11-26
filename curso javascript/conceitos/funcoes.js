// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN not a number
imprimirSoma(2, 3, 4)//ignora variáveis apos as setadas

// função com retorno
function Soma(a, b = 1){
    return a + b
}
console.log(Soma(2, 3))
console.log(Soma(2))
console.log(Soma(2, 3, 4))