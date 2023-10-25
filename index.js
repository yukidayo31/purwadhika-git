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


// Palindrome String Checking using String Method
function palindromeCheck(str) {
     if (str == str.split('').reverse().join('')) return `${str} is a palindrome`
     else return `${str} is not a palindrome`
     }
  
console.log(palindromeCheck("madam"))
console.log(palindromeCheck("hola"))

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


// cm to km coversion
function convert(centimeter) {
    centimeter  = centimeter / 100000
    return `${centimeter} km`
}
console.log(convert(100000))