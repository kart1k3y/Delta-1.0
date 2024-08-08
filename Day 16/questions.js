//question 1
let arr = ["hello","how","are","you","doing","?"]
let arr1 = arr.slice(0,3)
console.log(arr1)

//question 2
let arr2 = arr.slice(3)
console.log(arr2)

//question 3
let str = ""

if(str == "")
    console.log("string is empty")
else 
    console.log("string is not empty")

//question 4
let char = "AdDGsasdsD"
let char1 = char.toLowerCase()
let index = 4
if(char[index] == char1[index])
    console.log("is in lowercase")
else
    console.log("is not in lowercase")

//question 5
let string = "       Hellow           "
console.log(string.trim())

//question 6
let array = ["I","am","doing","good"]
if(array.includes("good"))
    console.log("element exists")
else
    console.log("element not found ")
