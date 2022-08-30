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

let value;

let val2;

let operator;

let numX = 0
let numY = 0
let numZ = 0

const clearXYZ = function() {
  numX = 0;
  numY = 0;
  numZ = 0;
}
const createNumber = function() {
  if (numX == 0) {
    numX = new Number(display.textContent)
  } else {
    numY = new Number(display.textContent)
  }
}

const checkNumber = function(x) {
  if (x == 1) {
    display.textContent = '0'
  }
}

const checkZero = function() {
  if (display.textContent.length == 2 && display.textContent == -0) {
    display.textContent = '-'
  }
  if (display.textContent.length == 1 && display.textContent == 0) {
    display.textContent = ''
  }
}

const checkDecimal = function() {
  let text = display.textContent
  let result = text.includes('.')
  if (result === true || text.length == 9) {
    display.textContent += ''
  } else {
    checkLength()
  }
}

const checkLength = function() {
  if (display.textContent.length >= 10) {
    display.textContent += ''
  } else {
    display.textContent += value
  }
}

const calcOperator = function(x) {
  if (x == 1) {operators.add()}
  if (x == 2) {operators.subtract()}
  if (x == 3) {operators.multiply()}
  if (x == 4) {operators.divide()}
  if (x == 5) {operators.percent()}
}

const addPrevious = function() {
  numZ = numX + numY
  numY = 0
  numX = numZ
  display.textContent = numX
}

const subtractPrevious = function() {
  numZ = numX - numY
  numY = 0
  numX = numZ
  display.textContent = numX
}

const multiplyPrevious = function() {
  numZ = numX * numY
  numY = 0
  numX = numZ
  display.textContent = numX
}

const dividePrevious = function() {
  numZ = numX / numY
  numY = 0
  numX = numZ
  display.textContent = numX
}

const percentPrevious = function() {
  numZ = (numX / numY) * 100
  numX = numZ
  numY = 0
  display.textContent = numX
}

const operators = {
  add: function() {
    if (operator == 2) {
      subtractPrevious()
    }
    if (operator == 3) {
      multiplyPrevious()
    }
    if (operator == 4) {
      dividePrevious()
    }
    if (operator == 5) {
      percentPrevious()
    }
    if (numX != 0 && numY != 0) {
      numZ = numX + numY
      numY = 0
      numX = numZ
      display.textContent = numX
    }
  },

  subtract: function() {
    if (operator == 1) {
      addPrevious()
    }
    if (operator == 3) {
      multiplyPrevious()
    }
    if (operator == 4) {
      dividePrevious()
    }
    if (operator == 5) {
      percentPrevious()
    }
    if (numX != 0 && numY != 0) {
      numZ = numX - numY
      numY = 0
      numX = numZ
      display.textContent = numX
    }
  },

  multiply: function() {
    if (operator == 1) {
      addPrevious()
    }
    if (operator == 2) {
      subtractPrevious()
    }
    if (operator == 4) {
      dividePrevious()
    }
    if (operator == 5) {
      percentPrevious()
    }
    if (numX != 0 && numY != 0) {
      numZ = numX * numY
      numY = 0
      numX = numZ
      display.textContent = numX
    }
  },

  divide: function() {
    if (operator == 1) {
      addPrevious()
    }
    if (operator == 2) {
      subtractPrevious()
    }
    if (operator == 3) {
      multiplyPrevious()
    }
    if (operator == 5) {
      percentPrevious()
    }
    if (numX != 0 && numY != 0) {
      numZ = numX / numY
      numY = 0
      numX = numZ
      display.textContent = numX
    }
  },
 
  percent: function() {
    if (operator == 1) {
      addPrevious()
    }
    if (operator == 2) {
      subtractPrevious()
    }
    if (operator == 3) {
      multiplyPrevious()
    }
    if (operator == 4) {
      dividePrevious()
    }
    if (numX != 0 && numY != 0) {
      numZ = ((numX / numY) * 100)
      numX = numZ
      numY = 0
      display.textContent = numX
    }
  },

  squareRoot: function() {
    if (operator == 1) {
      addPrevious()
    }
    if (operator == 2) {
      subtractPrevious()
    }
    if (operator == 3) {
      multiplyPrevious()
    }
    if (operator == 4) {
      dividePrevious()
    }
    if (operator == 5) {
      percentPrevious()
    }
    if (numX != 0) {
      numZ = Math.sqrt(numX)
      numX = numZ
      display.textContent = numX
    }
  },
}

one.addEventListener('mousedown', () => {
  value = 1
  one.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

two.addEventListener('mousedown', () => {
  value = 2
  two.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

three.addEventListener('mousedown', () => {
  value = 3
  three.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

four.addEventListener('mousedown', () => {
  value = 4
  four.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

five.addEventListener('mousedown', () => {
  value = 5
  five.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

six.addEventListener('mousedown', () => {
  value = 6
  six.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

seven.addEventListener('mousedown', () => {
  value = 7
  seven.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

eight.addEventListener('mousedown', () => {
  value = 8
  eight.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

nine.addEventListener('mousedown', () => {
  value = 9
  nine.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

zero.addEventListener('mousedown', () => {
  value = 0
  zero.classList.add('change-white')
  checkNumber(val2)
  checkZero()
  checkLength()
  val2 = 0
})

decimal.addEventListener('mousedown', () => {
  value = '.'
  decimal.classList.add('change-white')
  checkNumber(val2)
  checkDecimal()
  val2 = 0
})

clear.addEventListener('mousedown', () => {
  clear.classList.add('change-yellow')
  display.textContent = '0'
  clearXYZ()
})

divide.addEventListener('mousedown', () => {
  val2 = 1
  divide.classList.add('change-red')
  createNumber()
  operators.divide()
  operator = 4
})

multiply.addEventListener('mousedown', () => {
  val2 = 1
  multiply.classList.add('change-red')
  createNumber()
  operators.multiply()
  operator = 3
})

subtract.addEventListener('mousedown', () => {
  val2 = 1
  subtract.classList.add('change-red')
  createNumber()
  operators.subtract()
  operator = 2
})

add.addEventListener('mousedown', () => {
  val2 = 1
  add.classList.add('change-red')
  createNumber()
  operators.add()
  operator = 1
})

equals.addEventListener('mousedown', () => {
  val2 = 1
  equals.classList.add('change-red')
  createNumber()
  calcOperator(operator)
  numX = 0
  operator = 0
})

plusMinus.addEventListener('mousedown', () => {
  plusMinus.classList.add('change-red')
  let result = display.textContent.includes('-')
  if (result == true) {
    display.textContent = display.textContent.replace('-','')
  } else {
    display.textContent = display.textContent.replace('','-')
  }
})

squareRoot.addEventListener('mousedown', () => {
  val2 = 1
  squareRoot.classList.add('change-red')
  createNumber()
  operators.squareRoot()
})

percent.addEventListener('mousedown', () => {
  val2 = 1
  percent.classList.add('change-red')
  createNumber()
  operators.percent()
  operator = 5
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
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 2) {
    value = 2
    two.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 3) {
    value = 3
    three.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 4) {
    value = 4
    four.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 5) {
    value = 5
    five.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 6) {
    value = 6
    six.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 7) {
    value = 7
    seven.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 8) {
    value = 8
    eight.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 9) {
    value = 9
    nine.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == 0) {
    value = 0
    zero.classList.add('change-white')
    checkNumber(val2)
    checkZero()
    checkLength()
    val2 = 0
  }
  if (x.key == '.') {
    value = '.'
    decimal.classList.add('change-white')
    checkNumber(val2)
    checkDecimal()
    val2 = 0
  }
  if (x.key == 'Escape') {
    clear.classList.add('change-yellow')
    display.textContent = '0'
    clearXYZ()
  }
  if (x.key == '/') {
    val2 = 1
    divide.classList.add('change-red')
    createNumber()
    operators.divide()
    operator = 4
  }
  if (x.key == '*') {
    val2 = 1
    multiply.classList.add('change-red')
    createNumber()
    operators.multiply()
    operator = 3
  }
  if (x.key == '-') {
    val2 = 1
    subtract.classList.add('change-red')
    createNumber()
    operators.subtract()
    operator = 2
  }
  if (x.key == '+') {
    val2 = 1
    add.classList.add('change-red')
    createNumber()
    operators.add()
    operator = 1
  }
  if (x.key == '=' || x.key == 'Enter') {
    val2 = 1
    equals.classList.add('change-red')
    createNumber()
    calcOperator(operator)
    numX = 0
    operator = 0
  }
  if (x.key == '%') {
    val2 = 1
    percent.classList.add('change-red')
    createNumber()
    operators.percent()
    operator = 5
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