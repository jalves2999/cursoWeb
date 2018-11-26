function Pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}
new Pessoa

////// arrow 3
let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global)

const obj = {}

    comparaComThis = comparaComThis.bind(obj)
    comparaComThis(obj)
