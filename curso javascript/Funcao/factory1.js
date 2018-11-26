const prod1 = {
    nome: '...',
    preco: 45
}
const prod2 = {
    nome: '...',
    preco: 4525
}

// Factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobren: 'Silva'
    }
}
console.log(criarPessoa())