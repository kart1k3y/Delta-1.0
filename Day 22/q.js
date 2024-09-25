let input = document.createElement('input')
document.querySelector('body').append(input)

let btn = document.createElement('button')
document.querySelector('body').append(btn)
btn.innerText = 'Click me'

input.setAttribute('placeholder','username')
btn.setAttribute('id','btn')

let s = document.querySelector('#btn')
s.classList.add('btnstyle')

let h = document.createElement('h1')
h.innerHTML = '<u>DOM Practice</u>'
document.querySelector('body').append(h)
h.style.color = 'purple'

let para = document.createElement('p')
para.innerHTML = '<b>Apna College Delta Practice</b>'
document.querySelector('body').append(para)



