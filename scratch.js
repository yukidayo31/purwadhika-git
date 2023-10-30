let a = 5
function stars(rows) {
    let stars = ""
    for (i = 1 ; i <= rows ; i++) {
        for (j = 1 ; j <= rows ; j++) {
            stars += " * "
        }
        stars += "\n"
    }
    return stars
}

console.log(stars(a))


let b = 5
function starsPyramid(rows) {
    let starsPyramid = ""
    for (i = 1 ; i <= rows ; i++) {
        for (j = 1; j <= i ; j++) {
            starsPyramid += " * "
        }
        starsPyramid += "\n"
    }
    return starsPyramid
}
console.log(starsPyramid(b))

function reverseStarsPyramid(rows) {
    let reverseStarsPyramid = ""
    // menentukan banyaknya rows
    for (i = 1; i <= rows; i++) {
        // menentukan banyaknya * dalam setiap rows
        for (j = 1 ; j <= rows-i+1; j++) {
            reverseStarsPyramid += " * "
        }
        reverseStarsPyramid += "\n"
    }
    return reverseStarsPyramid
}
console.log(reverseStarsPyramid(b))