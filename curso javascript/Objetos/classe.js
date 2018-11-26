class Lancamento {
    constructor(nome = 'generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLencamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
    }
}

const salario = new Lancamento('salario', 45000)
const contadeLuz = new Lancamento('Luz', -200)

const contas = new cicloFinanceiro(6, 2018)
contas.addLencamentos(salario, contadeLuz)
console.log(contas.sumario())