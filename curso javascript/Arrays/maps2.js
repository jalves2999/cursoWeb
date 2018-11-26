const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.95}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// retornar um array com osp preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.apenasPreco
const resultado = carrinho.map(paraObjeto)
console.log(resultado)
