/*Funções que aceitam regex
* replace -> substitui caracteres
* math -> coloca os resultados em um array
* split -> divide uma string com base em um token
*/

/*FLAGS
* $1 -> (qualquer numero) -> permite guardar o valor encontrado
*/
/*Obs:
* Ordem dos grupos -> /( 1 ( 2 ) )( 3 )( 4 )/, $1 $2 $3 $4 -> ordem sequencial
*/
const { texto } = require('./base')

const regExp1 = /João|Maria/gi

console.log(texto.match(regExp1))//coloca todos os resultados em um array
console.log(texto.replace(/Felipe/gi,'João'))

console.log(texto.replace(/(João|Maria)/gi,'"$1"'))//Caso encontre João ou Maria inclua aspas neles

console.log(texto.replace(/(João|Maria)/gi,(input) => {
    return input.toUpperCase() + '#######'
}))//Caso encontre João ou Maria execute a função 