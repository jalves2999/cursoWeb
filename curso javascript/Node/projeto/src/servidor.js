const porta = 3003

const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const bancodeDados = require('./bancodeDados')

app.use(bodyparser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    // converte para JSON
    res.send(bancodeDados.getProdutos())
})
app.get('/produtos/:id',(req,res,next) =>{
    res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next) => {
    const produto = bancodeDados.salverProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.put('/produtos/:id',(req,res,next) => {
    const produto = bancodeDados.salverProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.delete('/produtos/:id',(req,res,next) =>{
    const produto = bancodeDados.excluirProduto({
        id: req.params.id
    })
    res.send(produto)
})

app.listen(porta,() => {
    console.log('Servidor executando na porta '+porta)
})