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

function numberTriangle(rows) {
    let value = 1
    let numberTriangle = ""
    // menentukan rows triangle
    for (i = 1; i <= rows; i++) {
        // menentukan banyak isi rows 
        for (i = 1; i <= rows; i++){
            for (j = 1; j <= i; j++){
                numberTriangle += value < 10 ? "0" + value + " ": value
                value++
            }
            numberTriangle += "\n"
        }
    }
    return numberTriangle
}
console.log((numberTriangle(4)))


//  FizzBuzz (n = 6, n = 15) (3=fizz, 5=buzz, 3*5=fizzbuzz)
function fizzBuzz(n) {
 
    for (i = 1; i <= n ;i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} = FizzBuzz`) 
        } else if (i % 3 === 0) {
            console.log(`${i} = Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} = Buzz`);
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(15)


// Create a function to calculate Body Mass Index (BMI)
// BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”
function countBMI(weight, height) {
    const BMI = weight / ((height/100)**2)
    console.log(BMI)
    if (BMI < 18.5) {
        return "less weight"
    } else if (BMI < 24.9) {
        return "ideal"
    } else if (BMI < 29.9) {
        return "overweight"
    } else if (BMI < 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }
}
console.log(countBMI(48, 156))


// remove all odd numbers in an array and return a new array that contains even numbers only
function evenArr(numArr) {
    let resultArr = []
    for (i = 0; i < numArr.length ; i++) {
        if (numArr[i] % 2 == 0) {
            resultArr.push(numArr[i])
        }
    }
    return resultArr
}
console.log(evenArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// a function to split a string and convert it into an array of words
function splitSentence(sentence) {
    return sentence.split(" ")
}

console.log(splitSentence("Hello World"))