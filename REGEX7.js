const {cpfs,cpfs2} = require('./base') 
/*MAIS FLAGS
* ^ -> COMEÇA COM (usada no inicio da expressão)
* $ -> TERMINA COM (usada no final da expressão)
* [^] -> negação
* m -> multiline
*/
console.log(cpfs)
const cpf = '254.224.567-90'
const cpfRegExp = /^(\d{3}\.){2}\d{3}-(\d{2})$/gm //verifica se começa e termina com digitos por linha
console.log(cpf.match(cpfRegExp))

console.log(cpfs2.match(cpfRegExp))