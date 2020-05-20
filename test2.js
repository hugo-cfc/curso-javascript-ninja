let person = "hugo+";
let personNoSignal = person.substring(0, person.length - 1);
let signal = person.charAt(person.length - 1);

console.log(
  `Nome c/ sinal: ${person} \n Nome s/ sinal: ${personNoSignal} \n Sinal: ${signal}`
);

let visorArray = ["13153-", "13153+", "13153X", "13153÷", "13153÷"];
let operatorsArray = ["+", "-", "÷", "X", "CE"];

function test(operator, visor) {
  let regexLastCharacter = /[-+*X÷\/]$/gim;
  let regexOperator = /[-+*X÷\/]/gim;

  if (operator == "CE") return (visor = 0);
  if (regexOperator.test(operator)) {
    if (regexLastCharacter.test(visor)) {
      return (visor = visor.substring(0, visor.length - 1).concat(operator));
    }
    visor += operator;
  }

  console.log(visor);
}

let i = 0
visorArray.forEach(function (item) {
  console.log('-------------------------------------')
  if (operatorsArray[i] === 'CE') {
    return (console.log(`Valor esperado: 0 | Resultado final: ${test(operatorsArray[i], item)}`))

  }

  console.log(`Visor:${item} |Operador:${operatorsArray[i]} \nResultado esperado:${'13153' + operatorsArray[i]}\nResultado final: ${test(operatorsArray[i], item)}`);
  i++
  console.log('-------------------------------------')

});


