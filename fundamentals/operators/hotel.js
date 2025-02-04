/*
  Crea un programa en JS que calcule la factura total de una persona en un hotel,
  donde cada habitación tiene un precio de $100 por noche, aprovechando una oferta promocional que incluye descuento
  del 5%.

  El programa debe solicitar al huésped el número de noches que pasó en el hotel para calcular
  la factura final.

  Si el usuario ingresa que se quedó 5 noches, la salida será: $475
*/
const prompt = require('prompt-sync')();

const pricePerNight = 100
const discount = 0.95

const totalNights = Number(prompt("How many nights did you spend in the hotel? --> "))

const finalPrice = (pricePerNight * totalNights) * discount

console.log(totalNights)
console.log(`Your total is: $${finalPrice}`)