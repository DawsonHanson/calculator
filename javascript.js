const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const decimal = document.querySelector('.decimal')
const clear = document.querySelector('.clear')
const divide = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const subtract = document.querySelector('.subtract')
const add = document.querySelector('.add')
const equals = document.querySelector('.equals')
const plusMinus = document.querySelector('.plus-minus')
const squareRoot = document.querySelector('.square-root')
const percent = document.querySelector('.percent')
const display = document.querySelector('.display')

window.addEventListener('mouseup', () => {
  one.classList.remove('change-white')
  two.classList.remove('change-white')
  three.classList.remove('change-white')
  four.classList.remove('change-white')
  five.classList.remove('change-white')
  six.classList.remove('change-white')
  seven.classList.remove('change-white')
  eight.classList.remove('change-white')
  nine.classList.remove('change-white')
  zero.classList.remove('change-white')
  decimal.classList.remove('change-white')
  clear.classList.remove('change-yellow')
  divide.classList.remove('change-red')
  multiply.classList.remove('change-red')
  subtract.classList.remove('change-red')
  add.classList.remove('change-red')
  equals.classList.remove('change-red')
  plusMinus.classList.remove('change-red')
  squareRoot.classList.remove('change-red')
  percent.classList.remove('change-red')
  })
  
one.addEventListener('mousedown', () => {
  one.classList.add('change-white')
})

two.addEventListener('mousedown', () => {
  two.classList.add('change-white')
})

three.addEventListener('mousedown', () => {
  three.classList.add('change-white')
})

four.addEventListener('mousedown', () => {
  four.classList.add('change-white')
})

five.addEventListener('mousedown', () => {
  five.classList.add('change-white')
})

six.addEventListener('mousedown', () => {
  six.classList.add('change-white')
})

seven.addEventListener('mousedown', () => {
  seven.classList.add('change-white')
})

eight.addEventListener('mousedown', () => {
  eight.classList.add('change-white')
})

nine.addEventListener('mousedown', () => {
  nine.classList.add('change-white')
})

zero.addEventListener('mousedown', () => {
  zero.classList.add('change-white')
})

decimal.addEventListener('mousedown', () => {
  decimal.classList.add('change-white')
})

clear.addEventListener('mousedown', () => {
  clear.classList.add('change-yellow')
})

divide.addEventListener('mousedown', () => {
  divide.classList.add('change-red')
})

multiply.addEventListener('mousedown', () => {
  multiply.classList.add('change-red')
})

subtract.addEventListener('mousedown', () => {
  subtract.classList.add('change-red')
})

add.addEventListener('mousedown', () => {
  add.classList.add('change-red')
})

equals.addEventListener('mousedown', () => {
  equals.classList.add('change-red')
})

plusMinus.addEventListener('mousedown', () => {
  plusMinus.classList.add('change-red')
})

squareRoot.addEventListener('mousedown', () => {
  squareRoot.classList.add('change-red')
})

percent.addEventListener('mousedown', () => {
  percent.classList.add('change-red')
})