const { texto,alfabeto } = require('./base')

/*FLAGS 
 * -> [] -> define um conjunto
 * -> ^ -> operador de negação
*/

/*RANGER - são atalhos
* -> - de alguma coisa até outra coisa. NOTA:Do menor para o maior
* -> LETRAS ACENTUADAS -> utilize caracteres unicodes e conjunto para poder manipular
* -> \w -> retorna letras maiusculas, minusculas e numeros -> para negar faça maiusculos: \W
* -> \d -> retorna apenas digitos
* -> \s encontra qualquer tipo de espaço, tabulação, quebra de linha e etc. 
*/

console.log(alfabeto.match(/[abc]/g))//busque cada caracter informado

console.log(alfabeto.match(/[^abc]/g))//busque qualquer coisa exceto o informado

console.log(alfabeto.match(/[0-9]/g))//busque apenas numeros

console.log(alfabeto.replace(/[^\u00c0-\u00cD]/gi,""))// <- UNICODE retorne apenas letras acentuadas insensitive


//RANGERS
console.log(alfabeto.match(/\d/gi))//retorne apenas numeros
console.log(alfabeto.match(/\D/gi))//retorne tudo execeto numeros