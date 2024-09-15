// const square = n => (n*n)

// while(true) {

// let n = parseInt(prompt("Enter number :"))
// if(n==0)
//     break;
// alert(square(n))

// }

let id = setInterval(function () {
    console.log("Hello world")
}, 2000)

setTimeout( () => {
    clearInterval(id)},10000
)

