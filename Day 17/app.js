const favMovie = "Deadpool"

let guess = prompt("Guess my favourite movie")

while(guess!=favMovie){
    if(guess == "quit"){
        console.log("You quit")
        break;
    }
    else
        guess = prompt("Wrong guess , try again")
}

if(guess==favMovie){
    console.log("Congrats")
}
