let btn = document.querySelector("button")
let ol = document.querySelector("ol")

btn.addEventListener("click",function () {
    let inp = document.querySelector("input")
    ol.innerHTML += `<li>${inp.value}&nbsp;&nbsp;&nbsp;<button class='del'>Delete</button></li>`
    inp.value = "";
})

ol.addEventListener("click",function (event) {
    if(event.target.nodeName == 'BUTTON'){
        event.target.parentElement.remove()
    }
})
