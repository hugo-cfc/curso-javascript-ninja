function createTr(){
  let fragmentTr = doc.createDocumentFragment()
  let tr = doc.createElement('tr')

  let imgTd = doc.createElement('td')
  let imgTag = doc.createTextNode('img')
  imgTag.setAttribute('src', $img.value)
  imgTd.appendChild(imgTag)
  tr.appendChild(imgTd)

  let brandTd = doc.createElement('td')
  let textBrand = doc.createTextNode($brand.value)
  brandTd.appendChild(textBrand)
  tr.appendChild(brandTd)

  let yearTd = doc.createElement('td')
  let textYear = doc.createTextNode($year.value)
  yearTd.appendChild(textYear)
  tr.appendChild(yearTd)

  let licensePlateTd = doc.createElement('td')
  let textLicensePlate = doc.createTextNode($licensePlate.value)
  licensePlateTd.appendChild(textLicensePlate)
  tr.appendChild(licensePlateTd)

  let colorTd = doc.createElement('td')
  let textColor = doc.createTextNode()
  colorTd.appendChild(textColor)
  tr.appendChild(colorTd)

  fragmentTr.appendChild(tr)
  return fragmentTr
}
