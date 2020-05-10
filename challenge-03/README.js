"# Desafio da semana #3";

// Declarar uma variável qualquer, que receba um objeto vazio.
let emptyObj = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let people = {
  name: "Hugo",
  lastname: "Cesar",
  sex: "Masculino",
  age: 22,
  height: 1.78,
  weight: 73,
  walking: false,
  walkedHowManyMeters: 0,
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
people.makeBirthday = function makeBirthday() {
  people.age++;
};

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
people.walk = function walk(meters) {
  people.walkedHowManyMeters += meters;
  people.walking = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
people.stop = function stop() {
  people.walking = false;
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
people.fullname = function fullname() {
  return `Olá! Meu nome é ${people.name} ${people.lastname}!`;
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
people.showAge = function showAge() {
  return `Olá, tenho ${people.age} anos!`;
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
people.showWeight = function showWeight() {
  return `Eu peso ${people.weight}Kg.`;
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
people.showHeight = function showHeight() {
  return `Minha altura é ${people.height}m.`;
};

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.fullname()); // Olá! Meu nome é Hugo Cesar!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.showAge()); // Olá, tenho 22 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.showWeight()); // Eu peso 73Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.showHeight()); // Minha altura é 178m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
people.makeBirthday();
people.makeBirthday();
people.makeBirthday();
/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(people.showAge()); // Olá, tenho 25 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
people.walk(1);
people.walk(4);
people.walk(5);
/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.walking); //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
people.stop();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(people.walking); //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(people.walkedHowManyMeters); //10
/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

people.presentation = function presentation() {
  let articleGenrer = "o";
  if (people.sex !== "Masculino") articleGenrer = "a";

  let agePlural = "anos";
  if (people.age === 1) agePlural = "ano";

  let metersPlural = "metros";
  if (people.walkedHowManyMeters === 1) metersPlural = "metro";

  return `Olá, eu sou ${articleGenrer} ${people.name} ${people.lastname}, tenho ${people.age} ${agePlural}, ${people.height}, meu peso é ${people.weight}Kg e, só hoje, eu já caminhei ${people.walkedHowManyMeters} ${metersPlural}!`;
};

// Agora, apresente-se ;)
console.log(people.presentation());
