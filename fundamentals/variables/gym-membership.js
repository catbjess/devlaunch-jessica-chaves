/*
  El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California,
  que ofrece membresías por $150 al mes.
  Opera de 6AM a 10PM, emplea a 10 entrenadores certificados
  y cuenta con comodidades como sauna, piscina y clases grupales
*/

const gymName = 'Elite Fitness Center'
const location = 'Palo Alto, California'

const membershipPrice = 150

const openTime = 6
const closeTime  = 10

const certifiedTrainers = 10

const commodity1 = 'sauna'
const commodity2 = 'pool'
const commodity3 = 'group classes'

console.log(`
  Gym Name: ${gymName} - Location: ${location}\n
  Membership Price: $${membershipPrice}\n
  Open from ${openTime}AM to ${closeTime}PM\n
  Team: ${certifiedTrainers} certified trainers\n
  Enjoy our ${commodity1}, ${commodity2}, ${commodity3}
  `)

