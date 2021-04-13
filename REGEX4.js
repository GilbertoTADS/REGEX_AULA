const { texto,html } = require('./base')
/*FLAGS 
 * -> . Qualquer caracter
 */
const regExp1 = /<.*>.*<\/.*>/gi //greedy -> seleciona o máximo possivel
console.log(html.match(regExp1))

const regExp2 = /<.*?>.*?<\/.*?>/gi //non-greedy -> seleciona o mínimo possivel
console.log(html.match(regExp2))