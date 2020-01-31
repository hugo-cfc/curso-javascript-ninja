(function() {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
        let person = {
        name: 'Hugo',
        lastName: 'Cesar',
        age: 21
    }

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log( `Propriedades de "person": ${Object.keys(person)}` )

  /*
  Crie um array vazio chamado `books`.
  */
  let books = []

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({name:'Birds', pages: 223}, {name: 'Jungle', pages:435}, {name: 'Oper', pages:463})
  

  /*
  Mostre no console todos os livros.
  */
  function showBooks() {
        showBooksLet = []
        for(let i = 0; i < books.length; i++) {
            showBooksLet[i] = books[i].name
         }
         
         return showBooksLet.join(', ')
         
    }
  
  console.log(`\nLista de livros: ${showBooks()}`)
  
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(`\nLivro que está sendo removido: ${books.pop().name} `)

  /*
  Mostre no console os livros restantes.
  */
  
  console.log( `\nAgora sobraram somente os livros: ${showBooks()}`)

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log(JSON.stringify(books))

  /*
  Mostre os livros nesse formato no console:
  */
  [{"name":"Birds","pages":223},{"name":"Jungle","pages":435}]

  /*
  Converta os livros novamente para objeto.
  */
  let booksJSON = JSON.stringify(books)
  console.log( '\nAgora os livros são objetos novamente: ${JSON.parse(booksJSON)}' )
  
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(let prop in books) {
        console.log(books[prop])
    } //{ name: 'Birds', pages: 223 }
      //{ name: 'Jungle', pages: 435 }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
   //let myName = ['H', 'u', 'g', 'o' ]

    let myName = ('H,u,g,o').split(',')
  
    console.log( `\nMeu nome é: ${myName}` );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  
  console.log(myName.join(''))

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  
  console.log(myName.reverse())

  
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort())
})()
