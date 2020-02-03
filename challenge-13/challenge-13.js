(function() {
  /*
  Envolva todo o código desse desafio em uma IIFE.
  */

  /*
  Crie um array e mostre no console a representação em String desse array,
  usando o método visto na aula 13.
  */
  console.log( 'O array em formato de string é:' );
  let myArray = [12, 21, 40, {nome: 'hugo'}]

  console.log(JSON.stringify(myArray))//[12,21,40,{"nome":"hugo"}]

  /*
  Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
  Cada array deve conter os estados dessa região.
  */
  let sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul']
  let sudeste = ['Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']

  /*
  Crie uma variável chamada `brasil`, que irá receber as duas regiões
  concatenadas. Mostre o `brasil` no console.
  */
  console.log( '\nAlguns Estados do Brasil:' );
  console.log(brasil)

  /*
  Adicione 3 novos estados da região Norte no início do array e mostre no console.
  */
  console.log( '\nMais estados adicionados:' );
  let stateAdd = brasil.unshift('Amazonas', 'Pará')
  console.log(stateAdd)

  /*
  Remova o primeiro estado do array `brasil` e mostre-o no console.
  */
  console.log( '\nEstado removido:' );
  let stateRemoved = brasil.shift()
  console.log(stateRemoved)

  /*
  Crie um novo array chamado `newSul`, que receba somente os estados do sul,
  pegando do array `brasil`. Não remova esses itens de `brasil`.
  */
  let newSul = []
  brasil.slice()
  /*
  Mostre no console os estados que estão em `newSul`.
  */
  console.log( '\nEstados do Sul do Brasil:' );
  // [ 'Paraná', 'Santa Catarina', 'Rio Grande do Sul' ]

  /*
  Mostre no console todos os estados que estão em `brasil`.
  */
  console.log( '\nAlguns Estados do Brasil:' );
  console.log(brasil) /*[
  *'Pará',
  *'Minas Gerais',
  *'São Paulo',
  *'Rio de Janeiro',
  *'Espirito Santo',
  *'Paraná',
  *'Santa Catarina',
  *'Rio Grande do Sul'
  *]
  */

  /*
  Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
  */
  let nordeste = ['Alagoas', 'Sergipe', 'Pernambuco', 'Paraíba', 'Rio Grande do Norte', 'Ceará', 'Piauí', 'Maranhão', 'Bahia']

  /*
  Mostre no console os estados do nordeste.
  */
  console.log( '\nEstados do Nordeste:' );
  console.log(nordeste)/* [
  'Alagoas',
  'Bahia',
  'Ceará',
  'Maranhão',
  'Paraíba',
  'Pernambuco',
  'Piauí',
  'Rio Grande do Norte',
  'Sergipe'
  ]*/

  /*
  Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
  chamada `newSudeste`.
  */
  newSudeste = brasil.splice(1, 4)

  /*
  Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
  ficar no mesmo nível que os estados já existentes, não em um array separado.
  */
  brasil = brasil.concat(nordeste)

  /*
  Mostre no console os estados em `newSudeste`.
  */
  console.log( '\nEstados em newSudeste:' );
  console.log(brasil) //[ 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo' ]

  /*
  Mostre no console os estados do `brasil`.
  */
  console.log( '\nAlguns estados do Brasil:' );
  console.log(brasil.filter(function(item) {
        return item.length > 7
    })) /*[
  'Santa Catarina',
  'Rio Grande do Sul',
  'Maranhão',
  'Pernambuco',
  'Rio Grande do Norte'
  ]*/ //Se o número de letras do nome do estado for maior que 7, retorne.

  /*
  usando forEach, percorra o array `brasil` e gere um novo array chamado
  `newBrasil`. Esse array deve ter cada item como um objeto, com as
  propriedades:
  - `id`: que será o índice do array `brasil`,
  - `estado`: que será o estado do array `brasil`.
  */
  let newBrasil = []
    brasil.forEach(function(valor, index) {
        return newBrasil[index] = {id: index, estado: valor}
    }) 

  /*
  Mostre o array `newBrasil` no console
  */
  console.log( '\nnewBrasil:' );
  console.log(newBrasil) /*{ id: 0, estado: 'Pará' },
  { id: 1, estado: 'Paraná' },
  { id: 2, estado: 'Santa Catarina' },
  { id: 3, estado: 'Rio Grande do Sul' },
  { id: 4, estado: 'Alagoas' },
  { id: 5, estado: 'Bahia' },
  { id: 6, estado: 'Ceará' },
  { id: 7, estado: 'Maranhão' },
  { id: 8, estado: 'Paraíba' },
  { id: 9, estado: 'Pernambuco' },
  { id: 10, estado: 'Piauí' },
  { id: 11, estado: 'Rio Grande do Norte' },
  { id: 12, estado: 'Sergipe' }
  ] */

  /*
  Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
  atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
  - "Sim, todos os estados tem mais de 7 letras!"
  Senão, mostre no console:
  - "Nem todos os estados tem mais de 7 letras!"
  */
  console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
  if ((brasil.every(function(item) {
        return item.length > 7
    }))) {
            console.log('Sim, todos os estados tem mais de 7 letras!')
        }else {
            console.log('Nem todos os estados tem mais de 7 letras!')
        }

  /*
  Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
  resultado à uma variável. Se esse estado existir no array, mostrar a frase no
  console:
  - "Ceará está incluído!"
  Senão, mostrar a frase:
  - "Ceará não foi incluído :("
  */
  console.log( '\nCeará está incluído em `brasil`?' );
  if(brasil.some(function(item) {
        return item === 'Ceará'
    })) {
        console.log('Ceará está incluído!')
    } else {
        console.log('Ceará não foi incluído :(')
    }

  /*
  Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
  objeto desse array, e adicione a frase abaixo na propriedade `estado`:
  - "[ESTADO] pertence ao Brasil."
  Atribua o novo array a uma variável chamada `map`.
  */
  let map = newBrasil.map(function(item, index) {
        return({id: newBrasil[index].id + 1, estado: newBrasil[index].estado + ` pertence ao Brasil.` }) 
    })

  /*
  Mostre no console o array criado acima:
  */
  console.log( '\nnewBrasil agora com mais informações:' );
  console.log(map) /*[
  { id: 1, estado: 'Pará pertence ao Brasil.' },
  { id: 2, estado: 'Paraná pertence ao Brasil.' },
  { id: 3, estado: 'Santa Catarina pertence ao Brasil.' },
  { id: 4, estado: 'Rio Grande do Sul pertence ao Brasil.' },
  { id: 5, estado: 'Alagoas pertence ao Brasil.' },
  { id: 6, estado: 'Bahia pertence ao Brasil.' },
  { id: 7, estado: 'Ceará pertence ao Brasil.' },
  { id: 8, estado: 'Maranhão pertence ao Brasil.' },
  { id: 9, estado: 'Paraíba pertence ao Brasil.' },
  { id: 10, estado: 'Pernambuco pertence ao Brasil.' },
  { id: 11, estado: 'Piauí pertence ao Brasil.' },
  { id: 12, estado: 'Rio Grande do Norte pertence ao Brasil.' },
  { id: 13, estado: 'Sergipe pertence ao Brasil.' }
]*/

  /*
  Filtre o array criado acima, retornando somente os estados que tiverem
  ID par. Atribua o valor à uma variável chamada `filter`.
  */
  let filter = map.filter(function(item, index) {
        return map[index].id % 2 === 0
    })

  /*
  Mostre o array filtrado acima no console.
  */
  console.log( '\nEstados com ID par:' );
  [
  { id: 2, estado: 'Paraná pertence ao Brasil.' },
  { id: 4, estado: 'Rio Grande do Sul pertence ao Brasil.' },
  { id: 6, estado: 'Bahia pertence ao Brasil.' },
  { id: 8, estado: 'Maranhão pertence ao Brasil.' },
  { id: 10, estado: 'Pernambuco pertence ao Brasil.' },
  { id: 12, estado: 'Rio Grande do Norte pertence ao Brasil.' }
  ]
})()  
