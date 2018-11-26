//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) não consegui acessar let

//template String
const produto = 'Ipad'
console.log(`${produto} é caro`)
console.log(`${produto} 
é caro`)

//Destructuring
const [l,e, ...tras] = 'Coder'
console.log(l,e,tras)

const [x , y] = [1,2,3]
console.log(x ,y)

const {idade: i, nome} = {nome: 'ana', idade: 9}
console.log(i,nome)