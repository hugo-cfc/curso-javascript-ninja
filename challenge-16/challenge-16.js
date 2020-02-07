(function() {
  /*
  1. Envolva todo o conteúdo desse desafio em uma IIFE.
  2. Adicione a diretiva 'use strict';
  3. Crie um arquivo index.html e adicione esse script à ele.
  */

  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log( 'As letras do seu nome:' );
    let name = 'Hugo'

    for (let i = 0; i < name.length; i++) {
        console.log(`${name.charAt(i)/*name[i]*/} é a ${name.indexOf(name.charAt(i)) + 1}ª do meu nome.`)    
    })
    /*H é a 1ª do meu nome.
      u é a 2ª do meu nome.
      g é a 3ª do meu nome.
      o é a 4ª do meu nome.*/
  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  let fullName = 'hugo-cesar-firmino-costa'
  
  console.log( '\nNome convertido à partir de um slug:' );
  function nameUpper(fullName) {
        let noTraceName = fullName.split('-')
        let newNameFinal = ''
        let currentName 
        for(let i = 0; i < noTraceName.length; i++) {
            currentName = noTraceName[i].charAt(0).toUpperCase() + noTraceName[i].slice(1)
            newNameFinal = newNameFinal.concat(currentName + ' ')
            }
        return newNameFinal
    }

    function nameUpper2(fullName) {
        let noTraceName = fullName.split('-')
        let newNameFinal
        newNameFinal = noTraceName.map(function(item) {
            return item.charAt(0).toUpperCase() + item.slice(1)
        }).join(' ')

        return newNameFinal
    }
  
    function nameUpper3(fullName) {
        let noTraceName = fullName.split('-').map(function(item) {
            return item.charAt(0).toUpperCase() + item.slice(1)
        }).join(' ')

        return noTraceName
    }
  
    //Hugo Cesar Firmino Costa
  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  let friends = ['Hugo', 'João', 'Maria', 'José', 'Léo']
  console.log( '\nMeus amigos:' );
  function friendsArray(friends) {
        let stringFriends = ''
        let diferenceLengthFinal = friends - friends.length
   
        for(let i = 0; i < friends.length; i++ ) {
            let separator = ', '
            let diferenceLengthFinal = friends.length - (i + 1)
           
            if(diferenceLengthFinal === 1) {
            separator = ' e '
            } else if( diferenceLengthFinal === 0){
            separator = '.'                
            }

            stringFriends = stringFriends + friends[i] + separator
        }
        return stringFriends + ' são meus amigos!'
    }

    function friendsArray2(friends) {
        let counter = 0
        let friendsString = 
        friends.forEach(function(item){
            let diferenceLengthFinal = friends.length - (counter + 1)
            let separator = ', '
            counter++

            if(diferenceLengthFinal === 1) {
                separator = ' e '
            }else if(diferenceLengthFinal === 0){
                separator = '.'
            }
            console.log(`${item}${separator}`)
            
            
        })
    }
  
  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log( '\nEra "Roberto", agora é:' );
  console.log('Roberto'.replace('Roberto', 'Roberta'))//Roberta
  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log( '\nParte de uma string:' );
  console.log('Fernando'.slice(3))//nando

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
  function intercalateUpLow(name) {
        let newMyName = ''
        let counter = 1
        for(let i = 0; i < name.length; i++) {
            if (counter % 2 === 0) {
                newMyName = newMyName + name.charAt(i).toLowerCase()
            } else {
            newMyName = newMyName + name.charAt(i).toUpperCase()
            }
            counter++
        }
        
        return newMyName
    }

    console.log(intercalateUpLow(myName)) //FeRnAnDo
})() 
