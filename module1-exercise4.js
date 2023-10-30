// Create a function that can create a triangle pattern according to the height we provide
let a = 5

function numberPyramid(height) {
    let numberPyramid = ""
    // menentukan rows pyramid
    for (i = 1; i <= height; i++) {
        // menentukan banyak isi rows 
        for (j = 1; j <= i; j++) {
            numberPyramid += j + " "
        }
        numberPyramid += "\n"
    }
    return numberPyramid
}
console.log((numberPyramid(a)))


// Create a function that receiving array as input, and this function can find maximum value in array without using built in method in javascript.
let b = [10, 55, 79, 32]

function maxValue(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > array[0])
        array[0] = array[i]
    }
    return array[0]
}
console.log(maxValue(b))


// Create a function that can create a triangle pattern according to the height
let c = 4

function numberTriangle(rows) {
    let value = ""
    let numberTriangle = 1
    // menentukan rows triangle
    for (i = 1; i <= rows; i++) {
        // menentukan banyak isi rows 
        for (j = 1; j <= i; j++) {
            value += numberTriangle + " "
            numberTriangle++
        }
        value += "\n"
    }
    return value
}
console.log((numberTriangle(c)))