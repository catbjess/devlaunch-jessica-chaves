/*
  escribe un programa en JS que solicite al usuario ingresar el
  número de días y calcule el número equivalente de meses y días restantes,
  considerando que un mes consta de 30 días.

  Este programa usa el módulo prompt-sync para recibir interactivamente
  la entrada del usuario. Después de calcular la cantidad de meses y dias restantes según la entrada,
  el programa muestra al usuario indicando el equivalente en meses y días restantes.

  Puedes usar Math.floor() para redondear el resultado a un número entero.
  Si el usaurio ingresa 100, la salida será 100 days are 3 months and 10 days
*/

const prompt = require('prompt-sync')();

const DAYS_PER_MONTH = 30

const userDays = parseInt(prompt('Please enter the number of days you wish to convert: '))

const months = Math.floor(userDays / DAYS_PER_MONTH)

const daysLeft = userDays % DAYS_PER_MONTH

console.log(`${userDays} days are ${months} months and ${daysLeft} days`)



