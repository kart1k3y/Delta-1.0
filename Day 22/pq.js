let para1 = document.createElement("p")
para1.innerText = "Hey , I m red."
document.querySelector('body').append(para1)
para1.style.color="red"

let heading = document.createElement('h3')
heading.innerText = "I'm blue h3"
document.querySelector('body').append(heading)
heading.style.color = 'blue'

let div = document.createElement('div')
document.querySelector('body').append(div)
div.style.backgroundColor = 'pink'
div.style.border = '2px solid black'

let bheading = document.createElement('h1')
bheading.innerText = "I'm in a div"
document.querySelector('div').append(bheading)

let para2 = document.createElement('p')
para2.innerText = "ME TOO"
document.querySelector('div').append(para2)