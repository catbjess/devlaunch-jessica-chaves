/*
  Escribe un programa sencillo en JS que calcule y muestre el índice de Masa Corporal IMC
  de un usuario. Debe solicitar al usuario su nombre, altura en metros y peso en kilogramos.

  Después de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nomnre y el valor de su IMC.

  Calcula el IMC usando:

  IMC = weight / height^2
*/

const prompt = require('prompt-sync')();

const name = prompt('Please enter your name: ')
const weight = parseFloat(prompt('Please enter your weight in KG: '))
const height = parseFloat(prompt('Please enter your height in meters: '))

const IMC = weight / Math.pow(height, 2)

console.log(`Hi ${name}, your BMI is ${IMC.toFixed(2)}`)