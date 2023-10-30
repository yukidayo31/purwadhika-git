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