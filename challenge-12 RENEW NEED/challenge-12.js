(function () {
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
    name: "Hugo",
    lastname: "Cesar",
    age: 22,
  };
  console.log('Propriedades de "person":');
  for (prop in person) {
    console.log(prop);
  }

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  let books = [];
  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push(
    { name: "Saber Viver", pages: 35 },
    { name: "Post Traumatic", pages: 315 },
    { name: "Dedicated", pages: 452 }
  );

  console.log("\nLista de livros:");

  /*
  Mostre no console todos os livros.
  */
  for (let i = 0; i < books.length; i++) {
    if (i === books.length - 1) {
      console.log(books[i].name + ". ");
      break;
    }
    console.log(books[i].name + ", ");
  }

  console.log("\nLivro que está sendo removido:");

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop().name);
  console.log("\nAgora sobraram somente os livros:");
  /*
  Mostre no console os livros restantes.
  */
  for (let i = 0; i <= books.length - 1; i++) {
    if (i === books.length - 1) {
      console.log(books[i].name + ".");
      break;
    }
    console.log(books[i].name + ",");
  }

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  let booksStr = JSON.stringify(books);
  console.log("\nLivros em formato string:");

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(booksStr);

  /*
  Converta os livros novamente para objeto.
  */
  booksStr = JSON.parse(booksStr);
  console.log("\nAgora os livros são objetos novamente:");
  console.log(booksStr);

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (let i = 0; i <= books.length - 1; i++) {
    for (prop in books[i]) {
      console.log(`${prop}: ${books[i][prop]}`);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */

  console.log("\nMeu nome é:");
  let myName = ["H", "u", "g", "o"];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(""));

  console.log("\nMeu nome invertido é:");

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse());

  console.log("\nAgora em ordem alfabética:");
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
})();
