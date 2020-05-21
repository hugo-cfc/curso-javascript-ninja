(function(win, doc){
  'use strict'
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */
  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initialize() { //Função que inicializará todo o código
    initEvents() //Inicializa função que contem os Listeners de eventos
  }

  function initEvents() { //Função para conter todos os Listeners (Ouvintes) de eventos
    Array.prototype.forEach.call($buttonsNumbers, function(button) { //Escuta botões com números
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) { //Escuta botões de operações
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false); //Escuta botão 'CE'
    $buttonEqual.addEventListener('click', handleClickEqual, false); //Escuta botão de igualdade '='
  }


  function handleClickNumber() { //Atualiza visor a cada número apertado. Dentro do Listener de números.
    $visor.value += this.value;
  }

  function handleClickOperation() { //Atualiza visor
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() { //Atualiza o visor quando aperta o 'CE'. Dentro do Listener do 'CE'.
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) { //////////Função que verifica se o último item é um operador. Retorna True ou False.
    var operations = getOperations(); //Função que retorna Array com operadores
    var lastItem = number.split('').pop(); //Transforma o valor no visor em array e com o .pop() retorna o último item para testar se é um operador ou não.
    return operations.some(function(operator) { //Some que verifica se algum item do array Operations é igual ao caractere que está no lastItem.
      return operator === lastItem;
    });
  }

  function getOperations() { //Função que retorna Array com operadores
    return Array.prototype.map.call($buttonsOperations, function(button){
      return button.value
    })
  }

  function removeLastItemIfItIsAnOperator(string) { ///////////Função que remove o último item se for operador
    if(isLastItemAnOperation(string)) //If com a função acima que retorna True ou Falso se for um operador ou não.
      return string.slice(0, -1);
    return string;
  }

  function handleClickEqual() { //Função ao clicar na igualdade
    $visor.value = removeLastItemIfItIsAnOperator($visor.value); //Atualiza o valor do visor depois de remover o operador se tiver algum por último.
    var allValues = $visor.value.match(getRegexOperations()); //Todos os números com operador no final
    $visor.value = allValues.reduce(calculateAllValues); //Executa função que faz o calculo final
  }

  function getRegexOperations() {
    return new RegExp('\\d+['+ getOperations().join('') +']?', 'g')
  }

  function calculateAllValues(accumulated, actual) { //Faz o calculo final com sinais e da o resultado
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getLastOperator(actual)
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  }

  function getLastOperator (value) {
    return isLastItemAnOperation(value) ? value.split('').pop() : '';
  }

  function doOperation(operator, firstValue, lastValue) {
    switch(operator) {
      case '+':
        return Number(firstValue) + Number(lastValue)
      case '-':
        return Number(firstValue) - Number(lastValue)
      case 'x':
        return Number(firstValue) * Number(lastValue)
      case '÷':
        return Number(firstValue) / Number(lastValue)
    }
  }

  initialize() //Função que inicializa todo o código
})(window, document)
