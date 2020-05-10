"# Desafio da semana #4";

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

let isTruthy = function (x) {
  if (x) return true;
  else return false;
};

let isTruthy2 = function (y) {
  return y ? true : false;
};

let isTruthy3 = function (z) {
  return !!z;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy2(0));
console.log(isTruthy2(null));
console.log(isTruthy2(undefined));
console.log(isTruthy2(NaN));
console.log(isTruthy2(false));
console.log(isTruthy2(-0));
console.log(isTruthy2(""));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy2(" "));
console.log(isTruthy2(function () {}));
console.log(isTruthy2({}));
console.log(isTruthy2(-1));
console.log(isTruthy2(1));
console.log(isTruthy2([]));
console.log(isTruthy2(Infinity));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let car = {
  brand: "Ford",
  model: "Ka",
  plate: "FGV-4655",
  year: 2017,
  color: "Azul",
  howManyDoors: 4,
  seats: 5,
  amountOfPeople: 0,
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
car.setColor = function (color) {
  car.color = color;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
car.getColor = function () {
  return car.color;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
car.getModel = function () {
  return car.model;
};
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
car.getBrand = function () {
  return car.brand;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
car.getBrandModel = function () {
  return `Esse carro é um ${car.getBrand()} ${car.getModel()}.`;
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
car.addPeople = function (amount) {
  let pluralPeople = "pessoas";
  let pluralPeople2 = "pessoas";
  let pluralCabem = "cabem";

  if (car.seats === 0) {
    return `Carro já está lotado!`;
  }

  if (amount > car.seats) {
    if (car.seats === 1) {
      pluralPeople2 = "pessoa";
      pluralCabem = "cabe";
    }
    return `Só ${pluralCabem} mais ${car.seats} ${pluralPeople2}.`;
  }

  car.amountOfPeople += amount;
  car.seats -= amount;

  if (car.amountOfPeople === 1) pluralPeople = "pessoa";
  return `Já temos ${car.amountOfPeople} ${pluralPeople} no carro!`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(car.getColor()); //Azul

// Mude a cor do carro para vermelho.
console.log(car.setColor("Vermelho"));

// E agora, qual a cor do carro?
console.log(car.getColor()); //Vermelho

// Mude a cor do carro para verde musgo.
console.log(car.setColor("Verde Musgo"));

// E agora, qual a cor do carro?
console.log(car.getColor()); // Verde Musgo

// Qual a marca e modelo do carro?
console.log(car.getBrandModel()); // Esse carro é um Ford Ka.

// Adicione 2 pessoas no carro.
console.log(car.addPeople(2)); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(car.addPeople(4)); // Só cabem mais 3 pessoas.

// Faça o carro encher.
console.log(car.addPeople(3)); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
console.log(car.addPeople(-4));

// Adicione 10 pessoas no carro.
console.log(car.addPeople(10)); // Carro já está lotado!

// Quantas pessoas temos no carro?
console.log(car.amountOfPeople); // 5
