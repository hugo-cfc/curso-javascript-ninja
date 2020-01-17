# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
------------------------
function soma(n1, n2) {
    return n1 + n2
}

soma(10,10)              / C
------------------------------------------------------

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

---------------------------
function soma(n1, n2) {
    return n1 + n2
}


let soma1 = soma(10, 10) + 5

console.log(soma1)       / C
-------------------------------------------------------

// Qual o valor atualizado dessa variável?
25                       / C

// Declare uma nova variável, sem valor.
let svalue               / C

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
---------------------------------------------------------
let svalue 

function nomev(svalue) {
    return(`O valor da variável agora é ${svalue}`)
}
                        / E
                        
let svalue 

function nomev() {
    svalue = VALOR
    return(`O valor da variável agora é ${svalue}`)
}                    
                      / CC
---------------------------------------------------------
// Invoque a função criada acima.

nomev('VALOR') /E
nomev()        /C

// Qual o retorno da função? (Use comentários de bloco).

/* O valor da variável agora é VALOR
              
/*             /C

Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
---------------------------------------------------------------
function mult(n1, n2, n3) {
        if (n1 === undefined || n2 === undefined || n3 === undefined ) {
              return 'Preencha todos números corretamente!'
          } else {
              return n1 * n2 * n3 + 2
          }
   }                                 / C
----------------------------------------------------------------
// Invoque a função criada acima, passando só dois números como argumento.
?
mult(23,32)                         /C

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?
/*Preencha todos os valores corretamente!*/
                                   /C
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?
mult(10, 20, 30)    
6002                              /C

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?
/*6002*/                          /C
/*


Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function exe2(a1, a2, a3) {
    if (a1 !== undefined && a2 === undefined && a3 === undefined) {
        return a1
    }else if (a2 !== undefined && a1 === undefined && a3 === undefined) {
        return a2
    }else if (a3 !== undefined && a1 === undefined && a2 === undefined) {
        return a3
    }else if (a1 !== undefined && a2 !== undefined && a3 === undefined) {
        return a1 + a2
    }else if (a1 !== undefined && a3 !== undefined && a2 === undefined) {
        return a1 + a3
    }else if (a2 !== undefined && a3 !== undefined && a1 === undefined) {
        return a3 + a2
    }else if (a1 !== undefined && a2 !== undefined && a3 !== undefined) {
        return (a1 + a2) / a3
    }else if (a1 === undefined && a2 === undefined && a3 === undefined) {
        return false
    }else {
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
exe2(1)
1
exe2(10)
10
exe2(10, 10)
20
exe2(10, 10, 2)
10
exe2()
false
