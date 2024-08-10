//question 1
let arr = [1,2,3,4,5,6,2,3]

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]==2)
        arr.splice(i,1)
}

console.log(arr)

//question 2
let number = 284567
let str = number.toString()
let count = 0

for(i of str){
    count++
}

console.log(count)

//question 3
let numbe = 284567
let st = numbe.toString()
let sum = 0

for(i of st){
    let num = parseInt(i)
    sum = sum + num
}

console.log(sum)

//question 4
let n = 5
let fact = 1;
for(i=1;i<=n;i++){
    fact = fact*i
}

console.log(fact)

//question 5
let s = [2,10,5,7,1,4]
let l = 0;

for(nu of s){
    if(nu>l)
        l=nu
}

console.log(l)