const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas

const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()

//this e Bind 2

function pessoa1(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa1