(function() {
    'use strict'
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */
  
    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
    */
    let text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'
  
    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log( 'Adicionando seu nome no texto:' );
    console.log(text.replace(/(Manuel Marques de Sousa)/gi, 'Hugo Cesar Firmino Costa'))
  
    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log( '\nTrocando naturalidade:' );
    console.log(text.replace(/(brasileiro)/gi, 'maceioense'))
  
    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log( '\nTrocando números por -:' );
    console.log(text.replace(/[0-9] /gi, '-')) //\d
  
    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log( '\nTrocando de "D" a "h" por "0":' );
    console.log('\n',text.replace(/[D-Za-h]/g, '0'))
  
    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log( '\nTrocando "A" e "a" por "4":' );
    console.log('\n', text.replace(/a/gi, '4')) //[Aa] A|a
  
    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log( '\n"O Centauro de Luvas" em caixa alta:' );
    console.log('\n', text.replace(/(O Centauro de Luvas)/gi, function(capturaTotal, item1) {
          return (item1).toUpperCase()
      }))
  
    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    console.log( '\nMeses representados por números:' );
    function getMonthNumber(monthName) {
          let numberMonth 
          switch (monthName) {
              case 'Janeiro':
              case 'janeiro':  
                  numberMonth = '01'
                  break
              case 'Fevereiro':
              case 'fevereiro':
                  numberMonth = '02'
                  break
              case 'Março': 
              case 'março': 
                  numberMonth = '03'
                  break
              case 'Abril': 
              case 'abril': 
                  numberMonth = '04'
                  break
              case 'Maio': 
              case 'maio':
                  numberMonth = '05' 
                  break
              case 'Junho': 
              case 'junho': 
                  numberMonth = '06'
                  break
              case 'Julho': 
              case 'julho':
                  numberMonth = '07'
                  break
              case 'Agosto': 
              case 'agosto':
                  numberMonth = '08'
                  break 
              case 'Setembro':
              case 'setembro':
                  numberMonth = '09'
                  break
              case 'Outubro':
              case 'Outubro':
                  numberMonth = '10'
                  break
              case 'Novembro':
              case 'novembro':
                  numberMonth = '11'
                  break
              case 'Dezembro':
              case 'dezembro':
                  numberMonth = '12'
                  break
          }
  
          return numberMonth
      }
      let monthName = 'Agosto'
      console.log('\n', `O mês de ${monthName} é representado pelo número ${getMonthNumber(monthName)}.`)
       
  
    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */

    console.log('RegexDate: ')
    let regexDate = text.match(/1875|1804|13|18|junho|julho/gi)
    console.log(regexDate)
    
    
  
    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log( '\nReplace de datas:' );
    function replaceDate(regexDate) {
       /* for(let i; i < regexDate.length; i++) {
            console.log(`${i}ª data do texto: ${regexDate[i]}/${getMonthNumber(regexDate[i+1])}/${regexDate[i+2]}`)    
           
        }*/

        console.log(`Primeira data do texto: ${regexDate[0]}/${getMonthNumber(regexDate[1])}/${regexDate[2]}`)
        console.log('\n', `Segunda data do texto: ${regexDate[3]}/${getMonthNumber(regexDate[4])}/${regexDate[5]}`)
    }

    replaceDate(regexDate)
  })()
  
