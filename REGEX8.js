const { html2 } = require('./base')
/**
* $1 ou \1-> retrovisores (variaveis)
* ?: faz com que o grupo não seja contado/salvo em memoria
*/

console.log(html2.replace(/(<(\w+)(?:[\s\S]*?>))([\s\S]*?)(<\/\2>)/g,'$1  $3peguei a frase $4'))//