//question 1
// function larger(arr,n) {
//     let l=[];
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i]>n) {
//             l.push(arr[i])
//         }
//     }
//     return l;
// }

// let arr=[1,2,3,4,5]
// console.log(larger(arr,2))

//question 5
// function gen(start,end) {
//     let diff=end-start;
//     return(Math.floor(Math.random()*diff)+start)
// }

// console.log(gen(1,26))

//question 2
// let str="abcdabcdefgggh";

// function dup(str) {
//     let uni="";
//     for(let i=0;i<str.length;i++) {
//             if(!(uni.includes(str[i])))
//                 uni += str[i]
//     }
//     return uni
// }

// console.log(dup(str))

//question 3
let country=["india","pakistan","nepal","bhutan"]

function long(country) {
    let ans;
    for(let i=0;i<country.length;i++) {
        let ansind = country[i].length 
        let currlen = country[i].length
        if(ansind<currlen)
            ans = country[i]
    }
    return ans
}

console.log(long(country))