/* Create a function to convert Excel sheet column title to its corresponding column number */
function columnSheetNumber(alphabet) {
  let alphabetMap = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let result = 0;
  for (i = 0; i < alphabet.length; i++) {
    result += alphabetMap[alphabet[i]] * Math.pow(26, alphabet.length - i - 1);
  }
  return result;
}
console.log(columnSheetNumber("AAA"));

/* Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one */
//  Input = [2,2,1] Ouput =  1; Input = [4,1,2,1,2] Output = 4; Input: [1] Output: 1
function singleNum(arr1) {
  for (i of arr1) {
    if (arr1.indexOf(i) == arr1.lastIndexOf(i)) {
      return i;
    }
  }
}
console.log(singleNum([2, 2, 1])); //1
console.log(singleNum([4, 1, 2, 1, 2])); //4
console.log(singleNum([1])); //1

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise */
// Input = s = "anagram", t = "nagaram"; Ouput =  true;
// Input = s = "rat", t = "car" Output = false;
function anagram(s, t) {
  let a = s.split("").sort().join("");
  let b = t.split("").sort().join("");
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(anagram("anagram", "nagaram")); //true
console.log(anagram("rat", "car")); //false

/* You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 
steps. In how many distinct ways can you climb to the top? */
function staircase(steps) {
  let val1 = 0;
  let val2 = 1;
  let result;
  for (i = 0; i < steps; i++) {
    result = val1 + val2;
    val1 = val2;
    val2 = result;
  }
  return result;
}
console.log(staircase(2)); //2
console.log(staircase(4)); //5
