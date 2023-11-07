// function to calculate array of student data
// The object has this following properties : ○ Name → String; Email → String; Age → Date; Score → Number
// Parameters: array of student
// Return values :
// ○ Object with this following properties :
// Score: Highest, Lowest, Average
// Age: Highest, Lowest, Average

let student = [
  { name: "Hana", email: "hana@gmail.com", age: 15, score: 88 },
  { name: "Hanni", email: "hanni@gmail.com", age: 15, score: 80 },
  { name: "Hayato", email: "hayato@gmail.com", age: 17, score: 65 },
  { name: "Ayase", email: "ayase@gmail.com", age: 16, score: 78 },
  { name: "Ikura", email: "ikura@gmail.com", age: 17, score: 90 },
];

function calStudData(student) {
  const result = {
    score: {
      highest: student[0].score,
      lowest: student[0].score,
      average: 0,
    },
    age: {
      highest: student[0].age,
      lowest: student[0].age,
      average: 0,
    },
  };

  let totalScore = 0;
  let totalAge = 0;

  for (element of student) {
    if (element.score > result.score.highest) {
      result.score.highest = element.score;
    }
    if (element.score < result.score.lowest) {
      result.score.lowest = element.score;
    }
    if (element.age > result.age.highest) {
      result.age.highest = element.age;
    }
    if (element.age < result.age.lowest) {
      result.age.lowest = element.age;
    }

    totalScore += element.score;
    totalAge += element.age;
  }
  result.score.average = totalScore / student.length;
  result.age.average = totalAge / student.length;

  return result;
}
console.log(calStudData(student));

// // program to create transaction (cara 1)
// class Product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
// }

// class Transaction {
//     constructor() {
//         this.total = 0
//         this.product = []
//     }

//     addToCart(item) {
//         this.product.push(item)
//         // karena menggunakan metode push, maka yg diperhitungkan index terakhir
//         let lastIndex = this.product.length-1
//         this.total += (this.product[lastIndex].price * this.product[lastIndex].qty)

//         // console.log(item)
//         return `${item.name} berhasil dimasukkan!`
//     }

//     showTotal() {
//         return this.total
//     }

//     checkOut () {
//         return {total: this.total, product: this.product}
//     }

// }

// let product1 = new Product("Kue", 10000)
// let product2 = new Product("Teh", 5000)

// let transaction1 = new Transaction()
// console.log(transaction1.addToCart({name: product1.name, price: product1.price, qty: 2}))
// console.log(transaction1.addToCart({name: product2.name, price: product2.price, qty: 3}))

// console.log(transaction1.showTotal())
// console.log(transaction1.checkOut())

// program to create transaction (cara 2)
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.product = [];
  }

  addToCart(item, qty) {
    this.product.push({
      product: item.name,
      qty: qty,
      subtotal: item.price * qty,
    });
    // karena menggunakan metode push, maka yg diperhitungkan index terakhir
    let lastIndex = this.product.length - 1;
    this.total += this.product[lastIndex].subtotal;

    // console.log(item)
    return `${item.name} berhasil dimasukkan!`;
  }

  showTotal() {
    return this.total;
  }

  checkOut() {
    return { total: this.total, product: this.product };
  }
}

let product1 = new Product("Kue", 10000);
console.log(product1);
let product2 = new Product("Teh", 5000);

let transaction1 = new Transaction();
console.log(transaction1.addToCart(product1, 2));
console.log(transaction1.addToCart(product2, 3));

console.log(transaction1.showTotal());
console.log(transaction1.checkOut());
