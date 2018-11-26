// rest(juntar / spread(espalhar))


//spread
const funcionario = { nome: 'Maria', salario: 123123.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//spread array
const grupoA = ['jaoa','Pedro','Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela']
console.log(grupoFinal)