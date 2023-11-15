/* Given an array nums of size n, return the majority element */
// Input: nums = [3,2,3] Output: 3; Input: nums = [2,2,1,1,1,2,2] Output: 2
function majorityElement(numArr) {
  let maxCount = 0;
  for (i = 0; i < numArr.length; i++) {
    let count = 0;
    for (j = 0; j < numArr.length; j++) {
      if (numArr[i] == numArr[j]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
    }
    return numArr[i];
  }
}
console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2

/* Create a function to convert roman numeral to integer */
// "III" (3), "LVIII" (58), "MCMXCIV" (1994)
function romanToInteger(roman) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (i = 0; i < roman.length; i++) {
    if (romanMap[roman[i]] < romanMap[roman[i + 1]]) {
      result -= romanMap[roman[i]];
    } else {
      result += romanMap[roman[i]];
    }
  }
  return result;
}
console.log(romanToInteger("MCMXCIV")); //1994
console.log(romanToInteger("LVIII")); //58
console.log(romanToInteger("III")); //3

/* Given an integer numRows, return the first numRows of Pascal's triangle */
// Input = 5 Output = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
// Input = 1 Output = [[1]];
function numRow(value) {
  if (value === 0) return [];
  if (value === 1) return [[1]];

  let result = [];
  for (i = 0; i < value; i++) {
    let arr = [];
    for (j = 0; j <= i; j++)
      if (j === 0 || j === i) {
        arr.push(1);
      } else {
        arr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    result.push(arr);
  }
  return result;
}
console.log(numRow(5)); //5
console.log(numRow(1)); //5

/* given an array prices where prices[i] is the price of a given stock on the ith day */
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Input = [7,1,5,3,6,4] Output = 5;
// Input = [7,6,4,3,1] Output = 0;
function maxProfit(prices) {
  let profit = 0;
  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        let curr_profit = prices[j] - prices[i];
        profit = Math.max(profit, curr_profit);
      }
    }
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
