const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('quadro de honra')
            break
        case 9:
            console.log('quadro de melhores')
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('nota invalida')

    }
}

imprimirResultado(6)