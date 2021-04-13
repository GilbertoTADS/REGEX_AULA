const { texto, arquivos } = require('./base')

/* QUANTIFICADORES
* -> * -> opcional -> 0 ou mais vezes
* -> + -> obrigatório-> 1 ou mais vezes
* -> ? -> opcional -> 0 ou 1 vez
* -> \ -> Caractere de escape
* -> {min, max} -> define a quantidade minima e maxima de caracteres
*/

const regExp1 = /Jo+ão+/gi//localize joão considerando que a letra "o" pode se repetir indefinidamente
console.log(texto.match(regExp1))

const regExp2 = /\.jpe?g/gi//localize .jpeg considerando que a letra "e" pode não aparecer ou aparecer apenas 1X
for ( const arquivo of arquivos ){
    console.log(arquivo.match(regExp2))
}

const regExp3 = /\.jpe{0,}g/gi//localize joão considerando que a letra "e" pode aparecer 0 ou muitas vezes
for ( const arquivo of arquivos ){
    const valido = arquivo.match(regExp3)

    if(!valido)continue
    console.log(arquivo, valido)
}