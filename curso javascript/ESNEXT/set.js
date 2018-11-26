//não aceita repetição e não indexada

const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Palmeiras').add('corintias')
times.add('Flamengo')
times.add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel','Lucas',]