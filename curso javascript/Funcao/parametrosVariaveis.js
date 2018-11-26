function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1,2.3,16,2.5))
console.log(soma(1,2.3,16,2.5,' teste'))
console.log(soma('a' , 'b', 'c'))