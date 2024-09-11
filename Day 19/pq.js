//question 1
// function dice() {
//     console.log(Math.floor(Math.random()*6)+1)
// }

// dice();

//question 2
// function calcAvg(a,b,c) {
//     console.log((a+b+c)/3);
// }

// calcAvg(10,20,30)

//question 3
// function mul(n) {
//     for(let i=1;i<=10;i++) {
//         console.log(n +"*"+ i +"="+ (n*i))
//     }
// }

// mul(10);

//question 5
// function num(n) {
//     let sum=0;
//     for(let i=1;i<=n;i++) {
//         sum=sum+i;
//     }
//     return sum;
// }

// console.log(num(10))

//question 6
function concat(arg) {
    let result="";
    for(let i=0;i<arg.length;i++) {
        result += arg[i];
    }

    return result;
}

let str = ["myself ","kartik ","Patil"]

console.log(concat(str))