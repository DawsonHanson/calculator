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

const checkZero = function () {
  if (display.textContent.length == 1 && display.textContent == 0) {
    display.textContent = ''
  }
}

const checkDecimal = function () {
  let text = display.textContent
  let result = text.includes('.')
  if (result === true || text.length == 9) {
    display.textContent += ''
  } else {
    checkLength()
  }
}

let value;

const checkLength = function() {
  if (display.textContent.length >= 10) {
    display.textContent += ''
  } else {
    display.textContent += value
  }
}

one.addEventListener('mousedown', () => {
  value = 1
  one.classList.add('change-white')
  checkZero()
  checkLength()
})

two.addEventListener('mousedown', () => {
  value = 2
  two.classList.add('change-white')
  checkZero()
  checkLength()
})

three.addEventListener('mousedown', () => {
  value = 3
  three.classList.add('change-white')
  checkZero()
  checkLength()
})

four.addEventListener('mousedown', () => {
  value = 4
  four.classList.add('change-white')
  checkZero()
  checkLength()
})

five.addEventListener('mousedown', () => {
  value = 5
  five.classList.add('change-white')
  checkZero()
  checkLength()
})

six.addEventListener('mousedown', () => {
  value = 6
  six.classList.add('change-white')
  checkZero()
  checkLength()
})

seven.addEventListener('mousedown', () => {
  value = 7
  seven.classList.add('change-white')
  checkZero()
  checkLength()
})

eight.addEventListener('mousedown', () => {
  value = 8
  eight.classList.add('change-white')
  checkZero()
  checkLength()
})

nine.addEventListener('mousedown', () => {
  value = 9
  nine.classList.add('change-white')
  checkZero()
  checkLength()
})

zero.addEventListener('mousedown', () => {
  value = 0
  zero.classList.add('change-white')
  checkZero()
  checkLength()
})

decimal.addEventListener('mousedown', () => {
  value = '.'
  decimal.classList.add('change-white')
  checkDecimal()
})

clear.addEventListener('mousedown', () => {
  clear.classList.add('change-yellow')
  display.textContent = 0
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

window.addEventListener('keydown', (x) => {
  if (x.key == 1) {
    value = 1
    one.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 2) {
    value = 2
    two.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 3) {
    value = 3
    three.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 4) {
    value = 4
    four.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 5) {
    value = 5
    five.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 6) {
    value = 6
    six.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 7) {
    value = 7
    seven.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 8) {
    value = 8
    eight.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 9) {
    value = 9
    nine.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == 0) {
    value = 0
    zero.classList.add('change-white')
    checkZero()
    checkLength()
  }
  if (x.key == '.') {
    value = '.'
    decimal.classList.add('change-white')
    checkDecimal()
  }
  if (x.key == 'Escape') {
    clear.classList.add('change-yellow')
    display.textContent = 0
  }
  if (x.key == '/') {
    divide.classList.add('change-red')
  }
  if (x.key == '*') {
    multiply.classList.add('change-red')
  }
  if (x.key == '-') {
    subtract.classList.add('change-red')
  }
  if (x.key == '+') {
    add.classList.add('change-red')
  }
  if (x.key == '=' || x.key == 'Enter') {
    equals.classList.add('change-red')
  }
  if (x.key == '%') {
    percent.classList.add('change-red')
  }
})

window.addEventListener('keyup', (x) => {
  if (x.key == 1) {
    one.classList.remove('change-white')
  }
  if (x.key == 2) {
    two.classList.remove('change-white')
  }
  if (x.key == 3) {
    three.classList.remove('change-white')
  }
  if (x.key == 4) {
    four.classList.remove('change-white')
  }
  if (x.key == 5) {
    five.classList.remove('change-white')
  }
  if (x.key == 6) {
    six.classList.remove('change-white')
  }
  if (x.key == 7) {
    seven.classList.remove('change-white')
  }
  if (x.key == 8) {
    eight.classList.remove('change-white')
  }
  if (x.key == 9) {
    nine.classList.remove('change-white')
  }
  if (x.key == 0) {
    zero.classList.remove('change-white')
  }
  if (x.key == '.') {
    decimal.classList.remove('change-white')
  }
  if (x.key == 'Escape') {
    clear.classList.remove('change-yellow')
  }
  if (x.key == '/') {
    divide.classList.remove('change-red')
  }
  if (x.key == '*') {
    multiply.classList.remove('change-red')
  }
  if (x.key == '-') {
    subtract.classList.remove('change-red')
  }
  if (x.key == '+') {
    add.classList.remove('change-red')
  }
  if (x.key == '=' || x.key == 'Enter') {
    equals.classList.remove('change-red')
  }
  if (x.key == '%') {
    percent.classList.remove('change-red')
  }
})