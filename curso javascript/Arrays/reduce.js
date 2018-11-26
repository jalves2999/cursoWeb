const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultados = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log("soma de todos "+resultados)
console.log("media é :"+resultados/alunos.length)