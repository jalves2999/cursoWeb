function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com nota: '+nota)
    }else{
        console.log('Reprovado com nota: '+nota)
    }
}
soBoaNoticia(7.2)
soBoaNoticia(6.2)
// exercicio 2

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function(nota){
    if(NodeIterator.entre(9, 10)){
        console.log('quadro de honra')
    }
    else if(nota.entre(7,8))
    {
        console.log('Aprovado')
    }
    else if(nota.entre(0,3.99)){

    }
}