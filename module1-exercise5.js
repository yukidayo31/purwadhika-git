// lowest, highest and average value in the array (with and without sort function)
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
// WITHOUT SORT
function sortValue (numArr) {
    let highest = numArr[0]
    let lowest = numArr[0]
    let total = numArr[0]


    for (i = 1; i < numArr.length; i++) {
        // total = total + numArr[i]
        total += numArr[i]

        if (numArr[i] > highest) {
            highest = numArr[i]
        }
        if (numArr[i] < lowest) {
            lowest = numArr[i]
        }
    }

    return [`Highest: ${highest}`, `Lowest: ${lowest}`, `Average: ${total/numArr.length}`]
}
console.log(sortValue([12, 5, 23, 18, 4, 45, 32]))

// WITH SORT 
function sortFunction (numArr) {
    
    let result = numArr.sort(function(lowest, highest){return highest - lowest})
    let total = 0
    for (i in result) {
        total += result[i]
    }
    
return [result[0], result[result.length-1], total/result.length]
}
console.log(sortFunction([12, 5, 23, 18, 4, 45, 32]))


// function arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
// console.log(concateArr(["apple", "banana", "cherry", "date"]))
function separateEnd(newArray) {
    let result = ""
    for (i = 0; i < newArray.length; i++) {
        if (i === newArray.length-1) {
            result = result + "and " + newArray[i] 
        } else if (i === newArray.length-2) {
            result = result + newArray[i] + ", "
        } else {
            result = result + newArray[i] + ","
        }
    }
    return result
}
console.log(separateEnd(["apple", "banana", "cherry", "date"]))


// “Hello World” → [“Hello”, “World”]
function splitSentence(sentence) {
    let words = sentence.split(" ")
    return words
}
console.log(splitSentence("Hello World"))


// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function varArray(firstArray, reversedArray) {
    
    let resultArr = []
    for (i = 0; i < firstArray.length; i++) {
        resultArr.push(firstArray[i] + reversedArray[i])
    }
    return resultArr
}
console.log(varArray([1, 2, 3], [3, 2, 1]))


// arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
function newEleArray(arr, num) {
    let sign = false;
    
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            sign = true;
            break;
        }
    }
    if (sign === false) {
        arr.push(num);
    }
    return arr;
}
console.log(newEleArray([1, 2, 3, 4], 4))
console.log(newEleArray([1, 2, 3, 4], 7))
console.log(newEleArray([1, 2, 3, 4], 1))
console.log(newEleArray([1, 2, 3, 4], 9))
console.log(newEleArray([1, 2, 3, 4], 11))




///////////////////// PART 2
// function to remove all odd numbers in an array
// numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
function evenArr(numArr) {
    let newArr = []
    for (i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0) {
            newArr.push(numArr[i])
        }
    }
    return newArr
}
console.log(evenArr([1, 2, 3, 4, 5, 6]))


// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]
function maxIntArr (maxValue, numInt) {
    let newArr = []
    for (i = 0; i < maxValue; i++) {
        newArr.push(numInt[i])
    }
    return newArr
}
console.log(maxIntArr(5, [5, 10, 24, 3, 6, 7, 8]))


// Array combining function 
// arr1 = [1, 2, 3]; arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
const arrayConcat = (arr1, arr2) => arr1.concat(arr2)

console.log(arrayConcat([1, 2, 3] , [4, 5, 6]))


// Function to find duplicate values in an array
// arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
let check_duplicate_in_array = (input_array) => { 
    let duplicate_elements = []; 
    for (element of input_array) { 
        if (input_array.indexOf(element) !== input_array.lastIndexOf(element)) { 
            duplicate_elements.push(element); 
        } 
    } 
    return [...new Set(duplicate_elements)]; 
    
}; 
console.log(check_duplicate_in_array([1, 2, 2, 2, 3, 3, 4, 5, 5]))


// a function to find the difference in 2 given array
// arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
function difference(arr1 , arr2) {
    let diffArr = []
    let concatArr = [...arr1, ...arr2]
    
    for (element of concatArr) { 
        if (concatArr.indexOf(element) == concatArr.lastIndexOf(element)) { 
            diffArr.push(element); 
        } 
    } 
    return [...new Set(diffArr)]; 
}
console.log(difference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))
