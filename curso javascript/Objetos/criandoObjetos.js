//forma literal
const obj1 = {}
console.log(obj1)

// object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome// visivel fora da função
    this.getPrecocomDesconto = () => {
        return preco * (1-desc)
    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecocomDesconto(),p2.getPrecocomDesconto())

// função factory
function criarFuncionario(nome, salariobase,faltas){
    return {
        nome,
        salariobase,
        faltas,
        getSalario(){
            return (salariobase/30) * (30 - faltas)
        }
    }
}
    const f1 = criarFuncionario('joao',7900,4)
    const f2 = criarFuncionario('maria',11400,1)
    console.log(f1.getSalario(), f2.getSalario())

    //object.create
    const filha = Object.create(null)
    filha.nome = 'ana'
    console.log(filha)

    //uma funçao famosa de retorna objeto
    const fromJSON = JSON.parse('{"info": "sou um JSON"}')
    console.log(fromJSON.info)