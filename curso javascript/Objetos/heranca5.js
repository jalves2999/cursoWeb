console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//todos tem .prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Escola Ceder'.reverse())

Array.prototype.fist = function(){
    return this[0]
}
console.log([1,2,3,4,5,6,7].fist())
console.log(['a','b'].fist())