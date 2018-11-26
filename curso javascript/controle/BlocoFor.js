//while/////
let contador = 1
while(contador <= 10){
    console.log("contador= "+contador)
    contador++
}
console.log("----------------------------")
//////for///
for(let i = 1; i<= 10; i++){
    console.log('contador i = '+i)
}
///for com arrays
console.log("----------------------------")
const notas = [6.7 , 7.4 , 8.8 , 7.7 , 10]

for(i = 0; i <notas.length; i++ ){
    console.log('notas = '+notas[i])
    if(notas[i] < 7){
        console.log('Reprovado com '+notas[i])
    }else if(notas[i] == 10){
        console.log('Nota maxima '+notas[i])
    }
}
console.log("----------------------------")
///////for 2 ///// não usado
const notas2 = [2.7,7.6,7,8.1,9.8,10]

for(i in notas){
    console.log(i, notas2[i])
}
console.log("----------------------------")

const Pessoa = {
    nome: 'Ana',
    snome: 'Silva',
    idade: 29,
    peso: 64

}
for(atriburo in Pessoa){
    console.log(atriburo +' = '+Pessoa[atriburo])
}