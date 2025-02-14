/*
  Escribe un programa simple en JS que evalue el valor de una variable llamada 'n'.
  Verifica si el numero es positivo, negativo, o cero, y muestra un mensaje correspondiente
  basada en la siguiente evaulación
  Si el numero es mayor que 0 - Positivo
  Si el numero es menor que 0 - Negativo
  Si el numero es exactamente 0 - Cero
*/

const prompt = require('prompt-sync')();

const n = parseInt(prompt('Please enter a number to evaluate: '))

if(n > 0){
  console.log('Positive')
} else if(n < 0){
  console.log('Negative')
} else if(n === 0){
  console.log('Zero')
} else {
  console.log('Error. Please enter a valid number.')
}