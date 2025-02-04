/*
  Imagine desarrollar un programa para calcular el promedio de calificaciones de estudiantes
  en una escuela. Como parte de este desafío, primero configuras el entorno para recibir entradas del
  usuario, permitiendo que ingresen tres notas.

  Luego, procesas estos datos para calcular el promedio de manera precisa.

  Finalmente, presentas el resultado formateado con máximo dos decimales, para asegurar una lectura clara.
  Si el usuario ingresa 80.70.90, la salida será: 80
*/

const prompt = require('prompt-sync')();

const grade1 = parseInt(prompt('Please enter Grade 1: '))
const grade2 = parseInt(prompt('Please enter Grade 2: '))
const grade3 = parseInt(prompt('Please enter Grade 3: '))
const totalGrades = 3

const averageGrade = (grade1 + grade2 + grade3) / totalGrades

console.log(`
  Grade # 1: ${grade1}\n
  Grade # 2: ${grade2}\n
  Grade # 3: ${grade3}\n
  _____________________
  Your average grade is: --> ${averageGrade.toFixed(2)}
  `)