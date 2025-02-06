/*
  Escribe un programa simple en JS que examine las preferencias culinarias de tres personas:
  María, Pepe y Malvern. El programa analiza tres condiciones.
  1. Comparte María la msima comida favorita que tanto Pepe como Malvern?
  2. La comida favorita de María coincide con la de Pepe o con la de Malvern?
  3. La preferencia de Maria es diferente tanto de la de Pepe como de la de Malvern?
*/

const prompt = require('prompt-sync')()

const favoriteFoodMaria = prompt('Maria, what is your favorite food? -->  ')
const favoriteFoodPepe = prompt('Pepe, what is your favorite food? -->  ')
const favoriteFoodMalvern = prompt('Malvern, what is your favorite food? -->  ')

const allMatch = favoriteFoodMaria === favoriteFoodPepe && favoriteFoodMaria === favoriteFoodMalvern
const oneMatches = favoriteFoodMaria === favoriteFoodPepe || favoriteFoodMaria === favoriteFoodMalvern
const noneMatches = favoriteFoodMaria != favoriteFoodPepe && favoriteFoodMaria != favoriteFoodMalvern

console.log(`Does Maria share the same favorite food as Pepe and Malvern? A/ ${allMatch}`)
console.log(`Does Maria share favorite food with either Pepe or Malvern? A/ ${oneMatches}`)
console.log(`Is Maria's favorite food different from Pepe's and Malvern's? A/ ${noneMatches}`)