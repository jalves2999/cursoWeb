for(let letra of 'CODER'){
    console.log(letra)
}
const assuntosECMA = ['Maps', 'set', 'Promise']

for(let i in assuntosECMA){
    console.log(i)
}

for(let assunto of assuntosECMA){
    console.log(assunto)
}
console.log('---------------------------')
const assuntoMap = new Map([
    ['Map',{abordadp: true}],
    ['set',{abordadp: true}],
    ['promise',{abordadp: false}],
])

for(let assunto of assuntoMap){
    console.log(assunto)
}
for(let chave of assuntoMap.keys()){
    console.log(chave)
}
for(let valor of assuntoMap.values()){
    console.log(valor)
}
for(let[ch,vl] of assuntoMap.entries()){
    console.log(ch,vl)
}

const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}