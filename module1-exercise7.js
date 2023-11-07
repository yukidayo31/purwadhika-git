//////////* Create a function to check if two objects are equal *//////////
// { a: 2 } & { a: 1 }
// { a: “Hello” } & { a: 1 }
// { a: 1 } & { a: 1 }

//CARA: JSON.stringify//
// tidak bisa pakai === biasa karena obj js berbasis reference untuk comparison 
// disadvantage: key order sensitive
// function objComparison(obj1, obj2) {
//     if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(objComparison({ a: 2 }, { a: 1 }))
// console.log(objComparison({ a: "Hello" }, { a: 1 }))
// console.log(objComparison({ a: 1 }, { a: 1 }))

//CARA: Object.is()//
function objComparison(objValue1, objValue2) {
    return Object.is(objValue1, objValue2)
}
let b = {a: 2}
let c = {a: 1}
let d = {a: "Hello"}
let e = {a: 1}
e = c

console.log(objComparison(b, c))
console.log(objComparison(d, c))
console.log(objComparison(c, c))
console.log(objComparison(c, e))



//////////* Create a function to get the intersection of two object *//////////
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }
function objIntersection(obj1, obj2) {
    let a = JSON.stringify(obj1)
    let b = JSON.stringify(obj2)
    let c = {}
}
let a = JSON.stringify({a: 1, b: 2})
console.log(a)







