(function(doc, win) {
  'use strict'
  /*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */
  function Person(name, lastName) {
    this.name = name
    this.lastName = lastName
  }

  let hugo = new Person('Hugo', 'Costa')
  let jose = new Person('José', 'da Costa')

  let tereza = {
    name: 'Tereza',
    lastName: 'Costa'
  }

  let andrew = {
    name: 'Andrew',
    lastName: 'Silva'
  }

  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
  criada).
  Depois disso, invoque essa função, mostrando no console o nome completo das
  pessoas que foram criadas anteriormente, passando as pessoas acima como
  contexto da função. Use um console.log por pessoa.
  */
  console.log( 'O nome das pessoas é:' );

  Person.prototype.getFullName = function getFullName() {
    return this.name + ' ' + this.lastName
  }

  function getFullNameCall() {
    return this.name + ' ' + this.lastName
  }

  console.log('-------', '\n', hugo.getFullName())
  console.log(jose.getFullName())

  console.log(getFullNameCall.apply(tereza))
  console.log(getFullNameCall.call(andrew))



  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  function sum() {
    console.log(`Itens iterados:`)
    Array.prototype.forEach.call(arguments, function(item) {
      console.log(item)
    })
    console.log('Reduce:')
    return Array.prototype.reduce.call(arguments, function(acumulado,atual){
      return acumulado + atual
    })
  }

  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log( '\nSomar alguns números:' );

  console.log(sum(5, 6, 5, 3))
  console.log(sum(56, 56))
  console.log(sum(5, 3, 4, 5, 45))
  console.log(sum(10, 10))


  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  let $inputText = doc.querySelector('[data-js="text-camp"]')
  let $buttonSubmit = doc.querySelector('[data-js="button"]')
  let userEntry = []

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log( '\nEntrada do usuário:' );
  $buttonSubmit.addEventListener('click', function() {
    console.log('----------------------', '\n', 'Entrada do usuário: ' + $inputText.value)
  }, false)

  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  console.log( '\nFunção que limpa entrada do usuário (somente números):' );

  let regexNumbers = /[^\D]+/gm

  function justNumbers(text) {
    return text.match(regexNumbers)
  }
  console.log(justNumbers.toString())

  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  console.log( '\nEntrada do usuário limpa. Somente números:' );
  let numbers

  $buttonSubmit.addEventListener('click', function() {
    numbers = justNumbers($inputText.value).join('')
    
    console.log('Limpando letras: ', numbers)
    console.log(userEntry.push(Number(numbers)))
    console.log(userEntry)
  }, false)

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */
  console.log( '\nSomar números entrados pelo usuário:' );  
  $buttonSubmit.addEventListener('click', function(){ 
      if(userEntry.length > 1) 
        console.log(sum.apply(null, userEntry), '\n', '---------------------------')
  }, false)


})(document, window)
