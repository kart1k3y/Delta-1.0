//question 1

// let arr = [10,20,30]

// console.log(arr.every( (el) => {
//     return el%10==0;
// }))

//question 2

let arr = [1,2,3,5,6]

let min = arr.reduce( (min,el) => {
    if(el<min)
        return el
    else
        return min
})

console.log(min)