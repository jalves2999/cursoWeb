function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorio(-1, 10)
    console.log('opção escolhida foi' + opcao)
}
console.log('até a proxima')

// do while

function getInteiroAleatorio1(min1, max1){
    const valor1 = Math.random() * (max1 - min1) + min1
    return Math.floor(valor1)
}

let opcao1 = -1

do{
    opcao1 = getInteiroAleatorio1(-1, 10)
    console.log('opção escolhida foi' + opcao1)
}while(opcao1 != -1)
console.log('até a proxima')