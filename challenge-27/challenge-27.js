(function (win, doc) {
  "use strict";
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
  function DOM(nodes) {
    this.element = document.querySelectorAll(nodes);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function (item) {
      item.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function (item) {
      item.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.forEach2 = function forEach() {
    return Array.prototype.forEach.call(this.element, function(item) {
      console.log(item.firstChild.nodeValue)
    });
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments)
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.call(this.element, function(item) {
      console.log(item.firstChild.nodeValue)
    });
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.call(this.element, function(item) {
      console.log(item.firstChild.nodeValue)
    });
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.call(this.element, function(item) {
      console.log(item.firstChild.nodeValue)
    });
  };

  DOM.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }

  DOM.isObject = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  DOM.isFunction = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]'
  }

  DOM.isNumber = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
  }

  DOM.isString = function(obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
  }

  DOM.isBoolean = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]'
  }

  DOM.isNull = function(obj) {
    return obj === null || obj === undefined
  }

  function universalCallback(event) {
    event.preventDefault();
    console.log("Clicou");
  }

  console.log(DOM.isArray([]))
  console.log(DOM.isBoolean(true))
  console.log(DOM.isFunction(function(){}))
  console.log(DOM.isNull())
  console.log(DOM.isNumber(1))
  console.log(DOM.isString('3'))

})(window, document);
