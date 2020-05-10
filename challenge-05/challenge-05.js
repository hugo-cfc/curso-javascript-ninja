/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArr = [
  1,
  "Hugo",
  { name: "Hugo" },
  function () {
    return "Olá, mundo!";
  },
  false,
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr1, index) {
  if (index === undefined) return arr1;
  return arr1[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myArr2 = [
  "Hugo",
  2,
  { nome: "Hugo" },
  function () {
    return "Olá, mundo!";
  },
  [5, 3],
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myArr2));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function books(bookName) {
  let obj = {
    Saber: {
      quantidadePaginas: 234,
      autor: "Marcos Paulo",
      editora: "Cultura",
    },
    Post: {
      quantidadePaginas: 2424,
      autor: "João Marcos",
      editora: "Viva",
    },
    "Port Post": {
      quantidadePaginas: 2323,
      autor: "Maria Melo",
      editora: "Ti-ti-ti",
    },
  };
  if (bookName === undefined) return obj;
  return obj[bookName];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(books());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Saber tem ${books("Saber").quantidadePaginas} páginas.`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Port Post é ${books("Port Post").autor}`);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro Post foi publicado pela editora ${books("Post").editora}.`
);
