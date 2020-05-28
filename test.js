let number = '35464-354314'
let regexCep = /\D/g
let testNumber = '1321313'

console.log(testNumber.split(regexCep).join(''))
console.log(testNumber.length)

function testeNumber(number) {
  return number === '35464-354314'
}

console.log(testeNumber(5))
