function falardepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
falardepoisDe(3,'que legal')
    .then(frase => frase.concat('!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))