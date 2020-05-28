(function(win, doc){
  'use strict'
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  let ajax = new XMLHttpRequest()
  let ajaxJson = ''
  let $cep = doc.querySelector('[data-js="cep"]')
  let $status = doc.querySelector('[data-js="status"]')
  let $city = doc.querySelector('[data-js="city"]')
  let $state = doc.querySelector('[data-js="state"]')
  let $street = doc.querySelector('[data-js="street"]')
  let $district = doc.querySelector('[data-js="district"]')
  let $button = doc.querySelector('[data-js="button"]')
  let cepOutscope

  function parseAjax() {
    return ajaxJson = JSON.parse(ajax.responseText)
  }

  function values() {
    $city.value = ajaxJson.city
    $state.value = ajaxJson.state
    $street.value = ajaxJson.address
    $district.value = ajaxJson.district
    $status.value = `Endereço referente ao CEP ${cepOutscope}: ${$street.value}`
  }

  function valuesNull() {
    $city.value = null
    $state.value = null
    $street.value = null
    $district.value = null
    $status.value = `Não encontramos o endereço para o CEP: ${cepOutscope}.`
  }

  function receiveAjaxResponse(event) {
    if (ajax.readyState === 3){
      parseAjax()
      if (ajaxJson.status === 400) return valuesNull()
      values()
    }
  }

  function cleanNANCep() {
    let regexCep = /\D/g
    cepOutscope = $cep.value.split(regexCep).join('')
  }


  function openAjaxCEP(event) {
    event.preventDefault()
    cleanNANCep()

    ajax.open('GET', `https://ws.apicep.com/cep/${cepOutscope}.json` ) //pode usar replace
    $status.value =`Buscando informações para o CEP ${cepOutscope}...`
    ajax.send()

    ajax.addEventListener('readystatechange', receiveAjaxResponse, false)
  }

  $button.addEventListener('click', openAjaxCEP, false)

})(window, document)
