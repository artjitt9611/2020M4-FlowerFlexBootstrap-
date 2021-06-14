var searchButton = document.getElementById('searchButton')
var inputText = document.getElementById('inputText')
var inputText2 =  document.getElementById('inputText1')
var inputText3 = document.getElementById('inputText2')
var output = document.getElementById('output')
var GetUrl = document.getElementById('Shownimg')




/*let text = inputText.value
console.log(text)
let newButton = document.createElement('button')
newButton.classList.add('btn')
newButton.classList.add('btn-outline-primary')
newButton.classList.add('m-2')
newButton.setAttribute('type','button')
newButton.innerHTML = text
output.appendChild(newButton)*/

function addText(){
let text = inputText.value
console.log(text)
newNode = document.createElement('div')
newNode.classList.add('col-2')
newNode.innerHTML = text
output.appendChild(newNode)
}

function addText2(){
    let text = inputText2.value
    console.log(text)
    newNode = document.createElement('div')
    newNode.classList.add('col-8')
    newNode.innerHTML = text
    output.appendChild(newNode)
}

function addText3(){
    let text = inputText3.value
    console.log(text)
    let img = document.createElement('IMG')
    img.setAttribute("src",text)
    output.appendChild(img)
}






searchButton.addEventListener('click',addText)
searchButton.addEventListener('click',addText2)
searchButton.addEventListener('click',addText3)




