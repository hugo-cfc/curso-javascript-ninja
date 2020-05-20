let myArr = ["30", "+", "50", "-", "40", '+', '10', '-', '5', '+', '5', '+', '100'];
            

function operation(operator, number1, number2) {
  switch (operator) {
    case "+":
      return number1 + number2;

    case "-":
      return number1 - number2;

    case "X":
    case "x":
    case "*":
      return number1 * number2;

    case "/":
    case "÷":
      return number1 / number2;
  }
}

let acummulated
let number1;
let number2;
let operator;
let result = 0;
let result2 = 0;

let if1 = 0
let if2 = 0
let if3 = 0

for (let i = 0; i < myArr.length; i++) {
  console.log('--------------------------------')
  console.log(`ITERAÇÃO DA VEZ ${myArr[i]}`)
  if(acummulated === undefined){
    if1++
    acummulated = myArr[i]
    console.log(`Agora o acumulated vale: ${acummulated} e entrou nesse IF ${if1} vez(es).`)
    continue
  }

  if (/[-+*X÷\/]$/g.test(acummulated)) {
    if2++
    number1 = acummulated.substring(0, acummulated.length - 1)
    number1 = Number(number1)
    operator = acummulated.charAt(acummulated.length - 1)
    number2 = myArr[i]
    number2 = Number(number2)
    acummulated = 0
    console.log(`CHEGOU NO 2ªIF E NUMBER1: ${number1}|${ typeof number1}| OPERADOR:${operator}| NUMBER1:${number2}|${ typeof number2}. IF RODADO ${if2} VEZ(ES).`)
    result = operation(operator, number1, number2)
    acummulated = result
    console.log(acummulated)
    console.log('---------------------- FIM-------------------')
    continue
  }


  acummulated += myArr[i]
}

console.log(acummulated)
