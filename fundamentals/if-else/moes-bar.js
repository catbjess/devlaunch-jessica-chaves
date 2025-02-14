/*
  Entrada de fecha de nacimiento: se solicita al usuario que ingrese su fecha de nacimiento en el formato YYYY/MM/DD.
  Calculo de la edad: se create un objeto Date para la fecha de nacimiento y se calcula la edad restando el año de nacimiento del año actual. También se verifica
  si ya ha pasado el cumpleaños del año actual, para ajustar la edad si es necesario.
  Verificación de edad: se usa un if-else para determinar si la persona cumple con la edad legal para beber (18 o mas) y se imprime el mensaje correspondiente.
*/

const prompt = require('prompt-sync')();

const birthdate = prompt('What is your birthdate in format (YYYY/MM/DD? -> ')

const birthday = new Date(birthdate)
const today = new Date()

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
  today.getMonth() > birthday.getMonth() ||
  (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
  )
)

if(!birthdayPassed){
  age--
}

if(age >= 18){
  console.log('Welcome to Moes Bar')
} else {
  console.log('You cannot enter the Bar')
}