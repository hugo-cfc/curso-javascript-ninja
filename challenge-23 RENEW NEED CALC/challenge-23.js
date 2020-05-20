(function (win, doc) {
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  let $visor = doc.querySelector('[data-js="visor"]');
  let numbersClass = doc.querySelectorAll(".numbers");
  let operations = doc.querySelectorAll('[data-js="operations"]');

  function resultCalculator(operator, number1, number2) {
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

  function numbersButtonTreatments(event) {
    if ($visor.value == 0) return ($visor.value = this.value);
    $visor.value += this.value;
  }

  Array.prototype.forEach.call(numbersClass, function (button) {
    button.addEventListener("click", numbersButtonTreatments, false);
  });

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

  let visorArray = [];
  function visorValueToArray() {
    visorArray = $visor.value.match(/(\d+)|[+\-*X÷/]/gim);
  }

  function resultExpression() {
    visorValueToArray();
    let acummulated;
    let number1;
    let number2;
    let operator;
    let result = 0;

    for (let i = 0; i < visorArray.length; i++) {
      if (acummulated === undefined) {
        acummulated = visorArray[i];
        continue;
      }

      if (/[-+*X÷\/]$/g.test(acummulated)) {
        number1 = acummulated.substring(0, acummulated.length - 1);
        number1 = Number(number1);
        operator = acummulated.charAt(acummulated.length - 1);
        number2 = visorArray[i];
        number2 = Number(number2);
        acummulated = 0;
        result = operation(operator, number1, number2);
        acummulated = result;
        continue;
      }
      acummulated += visorArray[i];
    }
    return $visor.value = acummulated
  }

  function operationsTreatments(event) {
    let regexLastCharacter = /[-+*X÷\/]$/gim;
    let regexOperator = /[-+*X÷\/]/gim;

    if (this.value == "CE") return ($visor.value = 0);
    if (regexOperator.test(this.value)) {
      if (regexLastCharacter.test($visor.value)) {
        return ($visor.value = $visor.value
          .substring(0, $visor.value.length - 1)
          .concat(this.value));
      }
      $visor.value += this.value;
    }
    if (this.value == "=") return resultExpression();
  }

  Array.prototype.forEach.call(operations, function (operator) {
    operator.addEventListener("click", operationsTreatments, false);
  });
})(window, document);
