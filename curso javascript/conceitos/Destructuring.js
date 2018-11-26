// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua ABC',
        numero: 1000
    }
}
const { nome, idade} = pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(i, n)

const { sobrenome, bem = true} = pessoa
console.log(sobrenome, bem)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// destructuring 2
const[a] = [10]
console.log(a)

const [n1, n2, n3,,n5,n6 = 0] = [1,20,6,51,9]
console.log(n1,n2,n3,n5,n6)
//array
const [,[,nota]] = [[,8,9],[9,6,8]]
console.log(nota)

/// destructuring 3
function rand({ min = 0 , max = 1000}){
    const valor = Math.random() * (max - min)+min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
//console.log(rand())

// destructuring 4
 function rand(min = 0, max = 1000){
     if(min > max)[min, max] = [max, min]
     const valor = Math.random()* (max - min) + min
     return Math,floor(valor)
 }
 console.log(rand([50,40]))
 console.log(rand([992]))
