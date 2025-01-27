/*
  Voy al supermercado GreenCenter para hacer mis compras habituales y
  planeo comprar manzanas y naranjas.
  Cuando esoty allí, veo que no hay plátanos ni uvas, asi que cambio un poco mi lista.
  Veo que 3 cajeros están trabajando, así que me preparo para pagar.
  Mis cosas cuestan $100 en total.
  Entrego $150 en efectivo y recibo $50 de cambio.
*/

const supermarketName = 'GreenCenter'

const planToBuy1 = 'apples'
const planToBuy2 = 'oranges'

const isTherePlantain = false
const isThereGrape = false

const totalCashiers = 3

const totalSpent = 100
const change = 50
const currency = '$'

console.log(`
  Supermarket: ${supermarketName}\n
  I play to buy ${planToBuy1} and ${planToBuy2}\n
  Are there plantains available? ${isTherePlantain}. Are there grapes available? ${isThereGrape}.
  There are ${totalCashiers} cashiers working
  My total spent was ${currency}${totalSpent}. I receive ${currency}${change} change.
  `)