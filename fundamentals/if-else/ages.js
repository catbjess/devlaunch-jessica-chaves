/*
  El programa solicita al usuario su edad con prompt-sync y usa if-else para clasificar segun
  la edad
*/

const prompt = require('prompt-sync')();

const age = parseInt(prompt('Please enter your age: '))

if(age >= 0 && age <= 2){
  console.log('You are a baby')
} else if(age >= 3 && age <= 13){
  console.log('You are a child')
} else if(age >= 14 && age <= 17){
  console.log('You are a teenager')
} else if(age >= 18 && age <= 29){
  console.log('You are a young adult')
} else if(age >= 30 && age <= 60){
  console.log('You are an adult')
} else if(age > 60){
  console.log('You are an elderly')
} else {
  console.log('Please enter a valid age.')
}

/* 
const message = (age <= 2)
  ? 'You are a baby'
  : (age >= 3 && age <= 13)
    ? 'You are a child'
    : (age >= 14 && age <= 17)

*/