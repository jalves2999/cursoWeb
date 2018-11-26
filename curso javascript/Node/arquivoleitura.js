const fs = require('fs')


const caminho = __dirname + '/arquivo.json'
// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho,'utf-8',(err,conteudo) => {
    const consig = JSON.parse(conteudo)
    console.log(consig.bd.host+" : "+consig.bd.post)
})

const config = require('./arquivo.json')
console.log(config.bd)

fs.readdir(__dirname,(err,arquivos) => {
    console.log('conteudo da pasta')
    console.log(arquivos)
})