(function() {
    'use strict'
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    */
    console.log( 'Limpando CPFs:' );
    function cleanCPF(cpf){
        return cpf.match(/\d/g).join('')
    }

    function cleanCPF2(cpf) {
        return cpf.replace(/\D/g, '') //Não números
    }

    let cpfArray = [
        "049-214 3421-1",
        "210.458.522-05", 
        "735 500 794 - 22", 
        "101.123-131x32"
    ]

    for(let i = 0; i < cpfArray.length; i++) {
        console.log('For normal: ' + cleanCPF(cpfArray[i]))
    }

    cpfArray.forEach(function (item) {
        console.log(`For Each com cleanCPF2: ${cleanCPF2(item)}`)
    })

    console.log(cpfArray.map( function(item, index) {
        return 'Com map: ' + cleanCPF(item)
    }))

    console.log('1: ', cleanCPF('049-214 3421-1'))
    console.log('2: ', cleanCPF2('049-214 3421-1'))
    console.log('1: ',cleanCPF('210.458.522-05'))
    console.log('2: ',cleanCPF2('210.458.522-05'))
    console.log('1: ',cleanCPF('735 500 794 - 22'))
    console.log('2: ',cleanCPF2('735 500 794 - 22'))
    console.log('1: ',cleanCPF('101.123-131x32'))
    console.log('2: ',cleanCPF2('101.123-131x32'))

    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */
    let regexCPF = /((\d{3})(\d{3})(\d{3})(\d{2}))/
    /*let regexCPF2 = /(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'*/
    function formatCPF(regex, item1, item2, item3, item4, item5 ) {
        return `${item1} = ${item2}.${item3}-${item4}-${item5}` 
    } 
    let cpf1 = cleanCPF('049-214 3421-1')
    let cpf2 = cleanCPF('210.458.522-05')
    let cpf3 = cleanCPF('735 500 794 - 22')
    let cpf4 = cleanCPF('101.123-131x32')

    console.log( '\nFormatando CPFs corretamente:' );
    console.log(cpf1.replace(regexCPF, formatCPF))
    console.log(cpf2.replace(regexCPF, formatCPF))
    console.log(cpf3.replace(regexCPF, formatCPF))
    console.log(cpf4.replace(regexCPF, formatCPF))

    cpfArray.forEach( function(item) {
        console.log('\n' + 'Usando outro forEach' + '\n' +  cleanCPF2(item).replace(regexCPF, formatCPF))
    }) //No lugar de usar 4 console.log.
    

    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */
    console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
    let text = "Os meses de janeiro, junho e julho começam com a letra j."
    console.log(text.match(/ju(n|l)ho/g))//ju[nl]ho]
    

    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */
    let text2 = "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    console.log( '\nMatch com a abertura de uma tag HTML:' );
    console.log(text2.match(/<\w+>/g))

    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */
    let text3 = "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
    console.log(text3.match(/<\w+><\/\w+>/g))

    /*
    Vamos complicar um pouco agora :D

    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.

    O resultado deve ser esse:
    <h1>O texto dentro da tag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>

    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */
    console.log( '\nFazer replace dos textos das tags:' );
    let text4 = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    console.log(text4.replace(/(<(\w+)>)([A-zá-ú\s]+)(<\/\w+>)/gi, /*</$1> O Texto dentro da tag $1 é "$2".</$1>*/function(regex, item1, item2, item3, item4) {
        console.log(`${item1}O texto dentro da tag "${item2}" é "${item3}"${item4}`)
    }))

})()
