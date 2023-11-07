// #1 Celcius to Fahrenheit
function fahrenheit(celcius) {
    return ((celcius * 9 / 5) + 32)
}
fahrenheit(60)
console.log(`${fahrenheit(60)} degrees Fahrenheit`)


// #2 Even/Odd number 
let evenNumber = function(val) {
    val % 2 === 0 ? console.log(`${val} is an even number`) : console.log(`${val} is an odd number`)
}

evenNumber(25);
evenNumber(2)


// #3 Prime Number
function primeNum(val) {
    if (val <= 1) return `${val} is not a prime number`;
    for (i = 2; i < val; i++) {
        if (val % i === 0) 
            return `${val} is not a prime number`
    }
    return `${val} is a prime number`
}

primeNum(7)
console.log(primeNum(7));

primeNum(6)
console.log(primeNum(6))


// #4 Sum of The Numbers 1 to N
let num = 5

function sum(a) {
    let result  = 0
    for (i = 1; i <= a ; i++) {
        result += i
    }
    return result
}

console.log(sum(num))

num = 3
console.log(sum(num))


// #5  Factorial Of A Number
let num2 = 4

function factorial(a) {
    let result  = 1
    for (i = a; i > 1 ; i--) {
        result *= i
    }
    return result
}
console.log(factorial(num2))

num2 =  6
console.log(factorial(num2))


// #6  Fibonacci number
function fibonacci(num) {
    let num1 = 1;
	let num2 = 0;
	let sum;
	for (i = 1; i < num; i++) {
		sum = num1 + num2;
		num2 = num1;
		num1 = sum;
	}
	return (sum);
}
console.log(fibonacci(5))