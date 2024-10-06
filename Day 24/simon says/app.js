let gameSeq = []
let userSeq = []
let level = 0
let started = false
let h3 = document.querySelector('h3')
let btns = ['yellow','red','green','blue']
let highscore = 0

document.addEventListener("keypress",function () {
    if(started == false){
        started = true
        levelup()
    }
})

function gflash(btn){
    btn.classList.add('gflash')
    setTimeout(function (){
        btn.classList.remove('gflash')
    },250)
}

function uflash(btn){
    btn.classList.add('uflash')
    setTimeout(function (){
        btn.classList.remove('uflash')
    },250)
}
function levelup() {
    userSeq = []
    level++
    h3.innerText= `Level ${level}`
    let randInx = Math.floor(Math.random()*4)
    console.log(randInx)
    let randbtn = btns[randInx]
    gameSeq.push(randbtn)
    let btn = document.querySelector(`.${randbtn}`)
    gflash(btn)
}

function btnPress() {
    uflash(this)
    let color = this.getAttribute('id')
    userSeq.push(color)

    check(userSeq.length-1)
}

let allbtns = document.querySelectorAll('.box')
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function check(index) {

    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length)
            setTimeout(levelup,1000)
    } else {
        if(highscore<level-1)
            highscore=level-1
        h3.innerText = `Game Over ! Your score : ${level-1} Press any key to start . Highest score : ${highscore}`
        reset()
    }
}

function reset() {
 gameSeq = []
 userSeq = []
 level = 0
 started = false
}