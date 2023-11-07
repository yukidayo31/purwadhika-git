// // // square *
// // let a = 5
// // function stars(rows) {
// //     let stars = ""
// //     for (i = 1 ; i <= rows ; i++) {
// //         for (j = 1 ; j <= rows ; j++) {
// //             stars += " * "
// //         }
// //         stars += "\n"
// //     }
// //     return stars
// // }

// // console.log(stars(a))

// // // pyramid *
// // let b = 5
// // function starsPyramid(rows) {
// //     let starsPyramid = ""
// //     for (i = 1 ; i <= rows ; i++) {
// //         for (j = 1; j <= i ; j++) {
// //             starsPyramid += " * "
// //         }
// //         starsPyramid += "\n"
// //     }
// //     return starsPyramid
// // }
// // console.log(starsPyramid(b))

// // // reverse * pyramid
// // function reverseStarsPyramid(rows) {
// //     let reverseStarsPyramid = ""
// //     // menentukan banyaknya rows
// //     for (i = 1; i <= rows; i++) {
// //         // menentukan banyaknya * dalam setiap rows
// //         for (j = 1 ; j <= rows-i+1; j++) {
// //             reverseStarsPyramid += " * "
// //         }
// //         reverseStarsPyramid += "\n"
// //     }
// //     return reverseStarsPyramid
// // }
// // console.log(reverseStarsPyramid(b))

// //////////////////////
// /*     OBJECT      */
// //////////////////////

// //Literal//
// const profile = {
//     name: "Yuki",
//     hobbies: ["bass", "eat", "sleep"],
//     motto: function(instrument) {console.log(`No ${instrument}, no life!!`)}
// }
// console.log(profile)
// profile.motto("bass")
// profile.motto = function(instrument) {(console.log(`${instrument} is my life!`))}
// profile.motto("Bass")
// profile.motto = function(cake) {(console.log(`${cake} is my favorite!`))}
// profile.motto("Baumkuchen")

// const {name, hobbies} = profile
// console.log(`Hi! I'm ${name}! I love ${hobbies}. Nice to meet you!`)

// //new Keyword//
// const user = new Object()
// user.name = "Hana"
// user.age = 24
// user.favFood = ["ramen", "fried rice", "cake"]

// console.log(user)

// //this keyword//
// /*untuk memanggil property di object yg sama */
// profile.food = "Strawberry shortcake"
// console.log(profile)
// profile.motto = function() {(console.log(`${this.food} is my favorite!`))}
// profile.drinks = function(drink) {console.log(`${drink} is also my fav!`)}
// profile.motto()
// profile.drinks("Mineral water")

// //Class//
// /*untuk mengelompokkan beberapa object yg memiliki keyword (property & method) yg sama dgn value berbeda */
class Student {
  constructor(name, grade, kelas) {
    this.name = name;
    this.grade = grade;
    this.kelas = kelas;
  }
  intro() {
    console.log(
      `Hey there! My name is ${this.name}. I am a ${this.grade}${this.kelas} student. Nice to meet you!`
    );
  }
}
// object name = hana; class = Student; keyword property = name, grade, kelas; keyword method = intro //
let hana = new Student("Hana", 8, "A");
console.log(hana.length);

// // object name = miyu; class = Student; keyword property = name, grade, kelas; keyword method = intro //
// let miyu = new Student("Miyu", 7, "B")
// hana.intro()
// miyu.intro()
// console.log(hana)
// console.log(miyu)

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Transaction {
//   #total = 0;
//   constructor() {
//     this.productCart = [];
//   }

//   addToCart(product, qty) {
//     this.productCart.push({
//       product: JSON.stringify(product),
//       qty: qty,
//       subtotal: product.price * qty,
//     });

//     for (let item of this.productCart) {
//       this.#total += item.subtotal;
//       //console.log(item.subtotal);
//     }
//   }

//   get showTotal() {
//     return this.#total;
//   }

//   get checkOut() {
//     return {
//       products: this.productCart,
//       total: this.#total,
//     };
//   }
// }

// product1 = new Product("Asus Gaming B35 Motherboard", 15000);
// product2 = new Product("Casing Tower NZXT Black", 13000);
// product3 = new Product("AOC monitor 27inch", 23000);

// transaction1 = new Transaction();

// transaction1.addToCart(product1, 2);
// transaction1.addToCart(product3, 3);

// console.log(transaction1.showTotal);

// console.log(transaction1.checkOut);

// lowest, highest and average value in the array (with and without sort function)
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
// WITHOUT SORT
// function sortValue(numArr) {
//   let highest = numArr[0];
//   let lowest = numArr[0];
//   let total = 0;

//   // for (i = 1; i < numArr.length; i++) {
//   //     // total = total + numArr[i]
//   //     total += numArr[i]

//   //     if (numArr[i] > highest) {
//   //         highest = numArr[i]
//   //     }
//   //     if (numArr[i] < lowest) {
//   //         lowest = numArr[i]
//   //     }
//   // }

//   // for (i of numArr) {
//   //     // total = total + numArr[i]
//   //     total += i

//   //     if (i > highest) {
//   //         highest = i
//   //     }
//   //     if (i < lowest) {
//   //         lowest = i
//   //     }
//   //     // console.log(total)
//   // }

//   for (i in numArr) {
//     // total = total + numArr[i]
//     total += numArr[i];

//     if (numArr[i] > highest) {
//       highest = numArr[i];
//     }
//     if (numArr[i] < lowest) {
//       lowest = numArr[i];
//     }
//     // console.log(total)
//   }

//   return [
//     `Highest: ${highest}`,
//     `Lowest: ${lowest}`,
//     `Average: ${total / numArr.length}`,
//   ];
// }

// console.log(sortValue([12, 5, 23, 18, 4, 45, 32]));

// return the sum of all the number
// mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
// function sumNum(arr) {
//   let a = 1;
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == typeof a) {
//       newArr.push(arr[i]);
//       // newArr += arr[i]
//       // total += newArr[i]
//     }
//   }
//   let total = 0;
//   for (i in newArr) {
//     total += newArr[i];
//   }
//   return total;
// }
// console.log(sumNum(["3", 1, "string", null, false, undefined, 2]));

// Function to find duplicate values in an array
// arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
// let check_duplicate_in_array = (input_array) => {
//   let duplicate_elements = [];
//   for (element of input_array) {
//     if (input_array.indexOf(element) !== input_array.lastIndexOf(element)) {
//       duplicate_elements.push(element);
//     }
//   }
//   return [...new Set(duplicate_elements)];
// };
// console.log(check_duplicate_in_array([1, 1, 2]));

// // function to calculate array of siswa data
// let siswa = [
//     {name: "Hana", email: "hana@gmail.com", age: 15, score: 88},
//     {name: "Hanni", email: "hanni@gmail.com", age: 15, score: 80},
//     {name: "Hayato", email: "hayato@gmail.com", age: 17, score: 65},
//     {name: "Ayase", email: "ayase@gmail.com", age: 16, score: 78},
//     {name: "Ikura", email: "ikura@gmail.com", age: 17, score: 90}
// ]

// function calStudData(siswa) {
//     const result = {
//         score: {
//             highest: siswa[0].score,
//             lowest: siswa[0].score,
//             average: 0
//         },
//         age: {
//             highest: siswa[0].age,
//             lowest: siswa[0].age,
//             average: 0
//         },
//     }

//     let totalScore = 0
//     let totalAge = 0

//     // for (element of siswa) {
//     //     if (element.score > result.score.highest) {
//     //         result.score.highest = element.score
//     //     }
//     //     if (element.score < result.score.lowest) {
//     //         result.score.lowest = element.score
//     //     }
//     //     if (element.age > result.age.highest) {
//     //         result.age.highest = element.age
//     //     }
//     //     if (element.age < result.age.lowest) {
//     //         result.age.lowest = element.age
//     //     }

//     //     totalScore += element.score
//     //     totalAge += element.age
//     // }

//     for (element in siswa) {
//         if (siswa[element].score > result.score.highest) {
//             result.score.highest = siswa[element].score
//         }
//         if (siswa[element].score < result.score.lowest) {
//             result.score.lowest = siswa[element].score
//         }
//         if (siswa[element].age > result.age.highest) {
//             result.age.highest = siswa[element].age
//         }
//         if (siswa[element].age < result.age.lowest) {
//             result.age.lowest = siswa[element].age
//         }

//         totalScore += siswa[element].score
//         totalAge += siswa[element].age
//     }

//     result.score.average = totalScore/siswa.length
//     result.age.average = totalAge/siswa.length

//     return result
// }
// console.log(calStudData(siswa))

// let siswa = [
//   {
//     name: { first: "Hana", last: "Kobato" },
//     email: "hana@gmail.com",
//     age: 15,
//     score: 88,
//   },
//   {
//     name: { first: "Hanni", last: "Kobato" },
//     email: "hanni@gmail.com",
//     age: 15,
//     score: 80,
//   },
//   {
//     name: { first: "Hayato", last: "Kobato" },
//     email: "hayato@gmail.com",
//     age: 17,
//     score: 65,
//   },
//   {
//     name: { first: "Ayase", last: "Kobato" },
//     email: "ayase@gmail.com",
//     age: 16,
//     score: 78,
//   },
//   {
//     name: { first: "Ikura", last: "Kobato" },
//     email: "ikura@gmail.com",
//     age: 17,
//     score: 90,
//   },
// ];

// function calStudData(siswa) {
//   const result = {
//     score: {
//       highest: {
//         mark: siswa[0].score,
//         name: siswa[0].name.first + siswa[0].name.last,
//       },
//       lowest: siswa[0].score,
//       average: 0,
//     },
//     age: {
//       highest: siswa[0].age,
//       lowest: siswa[0].age,
//       average: 0,
//     },
//   };

//   let totalScore = 0;
//   let totalAge = 0;

//   for (element of siswa) {
//     if (element.score > result.score.highest.mark) {
//       result.score.highest.mark = element.score;
//       result.score.highest.name = element.name.first + element.name.last;
//     }

//     if (element.score < result.score.lowest) {
//       result.score.lowest = element.score;
//     }
//     if (element.age > result.age.highest) {
//       result.age.highest = element.age;
//     }
//     if (element.age < result.age.lowest) {
//       result.age.lowest = element.age;
//     }

//     totalScore += element.score;
//     totalAge += element.age;
//   }

//   // for (element in siswa) {
//   //     if (siswa[element].score > result.score.highest.mark) {
//   //         result.score.highest.mark = siswa[element].score
//   //         result.score.highest.name = siswa[element].name.first + siswa[element].name.last
//   //     }
//   //     if (siswa[element].score < result.score.lowest) {
//   //         result.score.lowest = siswa[element].score
//   //     }
//   //     if (siswa[element].age > result.age.highest) {
//   //         result.age.highest = siswa[element].age
//   //     }
//   //     if (siswa[element].age < result.age.lowest) {
//   //         result.age.lowest = siswa[element].age
//   //     }

//   //     totalScore += siswa[element].score
//   //     totalAge += siswa[element].age
//   // }

//   result.score.average = totalScore / siswa.length;
//   result.age.average = totalAge / siswa.length;

//   return result;
// }
// console.log(calStudData(siswa));
