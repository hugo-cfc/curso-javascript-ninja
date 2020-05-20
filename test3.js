let myArr = ["30", "+", "50", "-", "40", '+', '10', '-', '5', '+', '5', '+', '100', '+', '5'];

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



function resultTest() {
  let acummulated
  let number1;
  let number2;
  let operator;
  let result = 0;
  
  for (let i = 0; i < myArr.length; i++) {
    if(acummulated === undefined){
      acummulated = myArr[i]
      continue
    }

    if (/[-+*X÷\/]$/g.test(acummulated)) {
      number1 = acummulated.substring(0, acummulated.length - 1)
      number1 = Number(number1)
      operator = acummulated.charAt(acummulated.length - 1)
      number2 = myArr[i]
      number2 = Number(number2)
      acummulated = 0
      result = operation(operator, number1, number2)
      acummulated = result
      continue
    }
     acummulated += myArr[i]
  }
  return acummulated
}

  console.log(resultTest())
