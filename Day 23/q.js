// let btn = document.querySelector('button');


// btn.addEventListener("mouseout", function(){
//     this.style.backgroundColor = "wheat"
//     this.style.color = "black"
// })
// btn.addEventListener("mouseenter", function(){
//     this.style.backgroundColor = "black"
//     this.style.color = "white"
// })
// btn.addEventListener("keypress", function(){
//     this.style.backgroundColor = "green"
//     this.style.color = "white"
// })

// let b = document.createElement('button')
// document.querySelector('body').append(b)
// b.innerText = "Click me"

// b.addEventListener("click",function(){
//     this.style.color = "green"
// })

let inp = document.querySelector('input')

inp.addEventListener("input",function(event){
    
    let h2= document.querySelector('h2');
    h2.innerText = this.value;
})

inp.addEventListener("keypressup",function(event){
        var charCode = event.charCode;
        let
        // If the charCode is between 48 and 57, it is a number
        if (charCode >= 48 && charCode <= 57) {
            return false; // Prevent the input
        }
        return true; // Allow the input
})
