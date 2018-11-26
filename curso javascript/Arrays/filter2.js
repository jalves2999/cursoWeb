

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]
const pcaro = p2 => produtos.preco <= 2000
const fragil = p2 => produtos.fragil 

console.log(produtos.filter2(pcaro).filter(fragil))