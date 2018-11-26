const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'ana',
        nota: 9.3
    }]
},
{
    nome: 'Turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getnotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getnotasTurma)

console.log(notas1)

Array.prototype.flatmap = function (callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatmap(getnotasTurma)
console.log(notas2)