const max= parseInt(prompt("Enter maximum number :"))
const random = Math.floor(Math.random()*max)+1
let guess = prompt("Guess the number : ")

while(true) {
    if(guess == "quit") {
        break;
    }

    if(guess == random) {
        console.log("You guessed the number")
        break;
    } else if(guess > random) {
        guess = prompt("Entered number is larger , please try again :")
    } else if(guess < random) {
        guess = prompt("Entered number is smaller , please try again :")
    }
}