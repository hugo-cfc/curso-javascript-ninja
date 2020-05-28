let fragment = document.createDocumentFragment()

let tdLine = doc.createElement('td')

let spanImg = doc.createElement('span')
let spanImgText = doc.createTextNode('Imagem:')
spanImg.appendChild(spanImgText)
tdLine.appendChild(spanImg)

let imgTag = ''

//-------------------------------------------



let spanBrand = doc.createElement('span')
let spanBrandText = doc.createTextNode('Marca:')
spanBrand.appendChild(spanBrandText)
tdLine.appendChild(spanBrand)


let spanBrandUser = doc.createElement('span')
let spanBrandUserText = doc.createTextNode(brand.value)
spanBrandUser.appendChild(spanBrandUserText)
tdLine.appendChild(spanBrandUser)

//-------------------------------------------


let spanYear = doc.createElement('span')
let spanYearText = doc.createTextNode('Ano:')
spanYear.appendChild(spanYearText)
tdLine.appendChild(spanYear)

let spanYearUser = doc.createElement('span')
let spanYearUserText = doc.createTextNode(year.value)
spanYearUser.appendChild(spanYearUserText)
tdLine.appendChild(spanYear)

//-------------------------------------------



let spanLicensePlate = doc.createElement('span')
let spanLicensePlateText = doc.createTextNode('Placa:')
spanLicensePlate.appendChild(spanLicensePlateText)
tdLine.appendChild(spanLicensePlate)

let spanLicensePlateUser = doc.createElement('span')
let spanLicensePlateUserText = doc.createTextNode(licensePlate.value)
spanLicensePlateUser.appendChild(spanLicensePlateUserText)
tdLine.appendChild(spanLicensePlateUser)


//-------------------------------------------



let spanColor = doc.createElement('span')
let spanColorText = doc.createTextNode('Cor:')
let color = spanColor.appendChild(spanColorText)
tdLine.appendChild(color)


let spanColorUser = doc.createElement('span')
let spanColorUserText = doc.createTextNode(color.value)
spanColorUser.appendChild(spanColorUserText)
tdLine.appendChild(spanColorUser)



