/*FLAGS
* g -> global -> encontra todas as ocorrencias
* i -> key insensitive -> ignora letras mauísculas
* () -> define grupos a serem buscados
* | -> operador "ou"
*/
const { texto } = require('./base')


const regExp1 = /João/gi; //procura a expressão joão globalmente ignorando letras maiusculas dentro da string
const regExp2 = /Teve 5 filhos /i

console.log('boolean: ',regExp1.test(texto))
console.log('boolean: ',regExp2.exec(texto))

const regExp3 = /(maria|João|luiz)(, hoje sua esposa)/i
const found = regExp3.exec(texto)

console.log(found[0])// -> todos os grupos (maria)(, hoje sua esposa)
console.log(found[1])// -> a 1º parte (maria)
console.log(found[2])// -> a 2º parte (, hoje sua esposa)