
let btn = document.querySelector('button')

btn.addEventListener("click",function(){
    let ncolor = color();
    let h1 = document.querySelector('h1')
    let div = document.querySelector('div')
    h1.innerText = ncolor
    div.style.backgroundColor = ncolor
})

function color(){
    let green = Math.floor(Math.random()*255);
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let ncolor = `rgb(${red},${green},${blue})`;
return ncolor
}

