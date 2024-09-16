//question 1
// let arr = [1,2,3,4]

// const newarr = arr.map( (el) => el*el)

// let res = newarr.reduce( (res,el) => res+el)

// let avg = res/arr.length

// console.log(avg)

//question 2

// let arr = [1,2,3,4]

// let newarr = arr.map((el) => el+5)

// console.log(newarr)

//question 3

// let arr = ["hello","how","you","doing"]

// let newarr = arr.map((el) => el.toUpperCase())

// console.log(newarr)

//question 4

// let arr = [1,2,3,4]

// function doubleAndReturnArgs(arr,...args) {
//     arr = [...arr,...args.map((el)=> (el*2))]
//     return arr
// }

// console.log(doubleAndReturnArgs(arr,5,6,7,8))

//question 5

const obj1 = {
    name: "kartik",
    age: 17
}
const obj2 = {
    city: "boisar",
    isDead: true
}

function mergeObjects(obj1,obj2){
    obj = {...obj1,...obj2}
    return obj
}

console.log(mergeObjects(obj1,obj2))