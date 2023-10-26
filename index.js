console.log("Hello World!")

// EXERCISE MULTIPLICATION TABLE
function  multiTable() {
    let num = 9
    let limit = 10
    let result;

    for (i = 1; i <= limit ; i++) {
        result = num * i
        console.log(`${num} * ${i} =  ${result}`)
    }
    return result
}
multiTable()


// // Palindrome String Checking using String Method (alternative)
// function palindromeCheck(str) {
//      if (str == str.split('').reverse().join('')) return `${str} is a palindrome`
//      else return `${str} is not a palindrome`
//      }
  
// console.log(palindromeCheck("madam"))
// console.log(palindromeCheck("hola"))

// Palindrome String Checking using Loop 
function isPalindrome(str) { 
    let word = ""; 
    for (i = str.length-1; i >= 0; i--) { 
        word += str[i]; 
    } 
    if (word == str) { 
        return `${str} is a palindrome`
    } else { 
        return `${str} is not a palindrome`; 
    } 
} 
console.log(isPalindrome("madam"))

// // Palindrome String Checking using Loop (alternative)
// function isPalindrome(str) { 
//     let word = ""; 
//     for (i = 0; i <= str.length-1; i++) { 
//         word += str[i]; 
//     } 
//     if (word == str) { 
//         return `${str} is a palindrome`
//     } else { 
//         return `${str} is not a palindrome`; 
//     } 
// } 
// console.log(isPalindrome("madam"))
// console.log("madam".length)

// // Palindrome String Checking using Loop (alternative)
// function isPalindrome(str) { 
//     let word = ""; 
//     for (i = 0; i < str.length; i++) { 
//         word += str[i]; 
//     } 
//     if (word == str) { 
//         return `${str} is a palindrome`
//     } else { 
//         return `${str} is not a palindrome`; 
//     } 
// } 
// console.log(isPalindrome("madam"))
// console.log("madam".length)

// cm to km coversion
function convert(centimeter) {
    centimeter  = centimeter / 100000
    return `${centimeter} km`
}
console.log(convert(100000))


// Format Number as Currency (IDR)
let idr = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
})
console.log(`${idr.format(1000)}`)


// // Remove the first occurrence of a given “search string” from a string (alternative replace method)
// let string = "Hello world"
// let newString = string.replace("Hello", "Ho")
// console.log(newString)

// Remove the first occurrence of a given “search string” from a string (another method)
function anotherNewString(oriStr, removeStr) {
    let slicedStringIndex = oriStr.search(removeStr);
    // if (slicedStringIndex === -1) {
    //     return oriStr
    // }
    return oriStr.slice(0, slicedStringIndex) + oriStr.slice(slicedStringIndex + removeStr.length);
}
console.log(anotherNewString("Hello world", "ell"))


// capitalize the first letter of each word in a string
function capitalize(myWord) {
    let words = myWord.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ")
}
console.log(capitalize("hello world"))
console.log("hello world".split(" ").length)


// reverse a string
function reverseString(word) {
    let a = word.split("").reverse().join("")
    console.log(a)
    return a
}

reverseString("hello")


// swap the case of each character from string
function swapCharacter(a) {
    let chara = ""

    for (i = 0; i < a.length; i++) {
        if (a[i] == a[i].toUpperCase()) {
            chara += a[i].toLowerCase()
        } else {
            chara += a[i].toUpperCase()
        }
    }
    console.log(chara)
    return chara
}
swapCharacter("The QuiCk BrOwN Fox")


// find the largest of two given integers
function isTheLargest(num1, num2) {
    if (num1 > num2) {
        return `${num1} is the largest`
    } else {
        return `${num2} is the largest`
    }
}

console.log(isTheLargest(42, 27))


// conditional statement to sort three numbers
function sortNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3 && num2 > num3) {
        return `${num1}, ${num2}, ${num3}`
        } else if (num1 > num2 && num1 > num3 && num3 > num2) {
            return `${num1}, ${num3}, ${num2}`
        } else if (num2 > num1 && num2 > num3 && num3 > num1) {
            return `${num2}, ${num3}, ${num1}`
        } else if (num2 > num1 && num2 > num3 && num1 > num3) {
            return `${num2}, ${num1}, ${num3}`
        } else if (num3 > num1 && num3 > num2 && num2 > num1) {
            return `${num3}, ${num2}, ${num1}`
        } else {
            return `${num3}, ${num1}, ${num2}`
        }
}
console.log(sortNum(18, 27, 42))


// a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
function dataType(abc) {
    let e = "string"
    let f = 1
    if (typeof abc == typeof e) {
        return 1
    } else if (typeof abc == typeof f) {
        return 2
    } else {
        return 3
    }
}
console.log(dataType("hello"))


// change every letter a into * from a string of input
function changeStr(sentence) {
    let a = sentence
    .replaceAll("A", "*")
    .replaceAll("a", "*")
    return `${a}`
}
console.log(changeStr("An apple a day keeps the doctor away"))