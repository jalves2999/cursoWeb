function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('ferrari',1000))
console.log(criarProduto('PS4',4000))