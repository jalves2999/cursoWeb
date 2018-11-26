//forma literal
function fun1(){}
// armazenar em variavel
const fun2 = function () {}
//armazena em array
const array = [function(a,b){ return a + b}, fun1, fun2]
console.log(array[0](2,4))
//armazenar em um objeto
const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())
//passar funlçao coo parametro
function run(fun){
    fun()
}
run(function(){ console.log('executando')})
//uma funçãp pode retornar/ conter um funçãp
function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(2)
const cincomais = soma(2,3)
cincomais(4)