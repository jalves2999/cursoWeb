//ES8 = Object.values/Object.entries
const obj = { a:1,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias de notacao
const nome ='Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//CLass
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'AU aU'
    }
}

console.log(new Cachorro().falar())