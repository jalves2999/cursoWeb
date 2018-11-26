// Closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variaveis externas

//contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())