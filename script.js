// // 

// var products = [
//     {
//         id: 101,
//         title: "Sony LED 40 inch",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 103,
//         title: "Bike",
//         variations: [
//             { id: 1, color: "black", price: 55000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 1, color: "black", price: 55000, quantity: 5 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 3.0,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//         ],
//     },
// ]
// for (var j = 0; j < products.length; j++) {
//     var product = products[j];
//     var sum = 0;
//     for (var i = 0; i < product.reviews.length; i++) {
//         sum = sum + product.reviews[i].rating;
//     }

//     var avgRating = sum / product.reviews.length;

//     console.log("Product " + product.id + " = " + avgRating + "(" + product.reviews.length + ")");
// }

//---------/


// var students = [
//     {
//         name: "farooq",
//         idNumber: 278268,
//         subject: "Maths",
//         marks: 25,
//         present: true,
//     },
//     {
//         name: "ali",
//         idNumber: 245668,
//         subject: "Urdu",
//         marks: 25,
//         present: false,
//     },
//     {
//         name: "umer",
//         idNumber: 277668,
//         subject: "English",
//         marks: 25,
//         present: true,
//     },
//     {
//         name: "maaz",
//         idNumber: 273548,
//         subject: "Science",
//         marks: 215,
//         present: false,
//     }
// ]
// // console.log(students[0].name)
// // console.log(students[0].idNumber)
// // console.log(students[0].subject)
// // console.log(students[0].marks)
// // console.log(students[0].present)

// var sum = 0
// for (var i = 0; i < students.length; i++) {
//     sum = sum + students[i].marks
// }
// // console.log(sum)
// var avg = sum / students.length
// console.log("Avg is ", avg,"=","Sum is",sum)




//----------/

// let farooq = document.getElementsByClassName ("boxs")
// console.log(farooq)

// farooq[2].style.backgroundColor = "red"

// let umer=document.getElementsByClassName("box")
// console.log(umer)
// umer [2].style.backgroundColor = "blue"

// document.getElementById("home").style.backgroundColor = "pink"

//-------/












// ------/ 

// Write a JavaScript function to find the largest of three numbers: a = 10, b = 25, c = 15.

// function largestNmuber(a, b, c) {
//     if (a >= b && a >= c) {
//         return a
//     } else if (b >= a && b >= c) {
//         return b
//     } else {
//         return c;
//     }
// }
// console.log(`${"The largest number is"} = ${largestNmuber(10, 25, 15)} `);

//--------------/

//  Write a function to check if a number is even or odd.

// function checkevenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }
// console.log(checkevenOdd(4))

//--------------/

// Write a function to reverse a string. Example: "hello" → "olleh"

// ====

// function reverse(name) {
//     return name.split("").reverse().join("");
// }

// console.log(reverse("Farooq"));

//--------------/

//  Write a function to find the sum of all numbers in an array.

// ====

// function sumArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));

//--------------/

// for loops logic bulding-------/

//  Print numbers from 1 to 10

// for (let i = 0; i <= 10; i++) {
//     console.log(i);


// }



//--------------/

// //  Print even numbers from 1 to 20

// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);

// }
// //  Print Odd numbers from 1 to 20

// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);

// }

//--------------/

//  Print numbers from 10 to 1 (reverse order)

// for (let i = 10; i >= 1; i--) {
//     console.log(i)

// }
// }

// -------------- /

// print a student result for javascript logic bulding

// function resultStudent(num) {
//     if (num >= 80 && num <= 100) {
//         return "Very Good A Gread";
//     } else if (num >= 60 && num <= 80) {
//         return "Good B Gread";
//     } else if (num >= 33 && num <= 60) {
//         return "Bad C Gread";
//     } else {
//         return "You Are Failed";
//     }
// }
// console.log(resultStudent(32));

// -------------- /

// calculatar Example ----- /

// function calculator(x, y, op) {
//     if (op === "+") {
//       return x + y;
//     }

//     if (op === "-") {
//       return x - y;
//     }

//     if (op === "*") {
//       return x * y;
//     }

//     if (op === "/") {
//       return x / y;
//     }

//     if (op === "max") {
//       return x > y ? x : y;
//     }

//     if (op === "min") {
//       return x < y ? x : y;
//     }
//   }

// let calculatorFn = (x, y, fn) => fn(x, y);

// const sum = (x, y) => x + y;
// const mul = (x, y) => x * y;
// const sub = (x, y) => x - y;
// const max = (x, y) => (x > y ? x : y);
// const min = (x, y) => (x < y ? x : y);

// console.log(calculatorFn(2, 4, mul));

// ----------- /

// var a =3;
// var b =5;
// var c = a+b
// console.log("The Sum is",c)

//  ----------------   /

// function minNumber(a, b, c) {
//     if (a <= b && a <= c) {
//         return a;
//     }
//     if (b <= a && b <= c) {
//         return b;
//     }
//     if (c <= b && c <= a) {
//         return c;
//     }
// }
// console.log(minNumber(2, 3, 1));

// function minNumber(a, b, c) {
//     let minNumber = c;
//     if (b < minNumber) {
//         minNumber = b
//     }
//     if (c < minNumber) {
//         minNumber = c
//     }
//     return minNumber ;
// }
// console.log(minNumber("farooq", -3, "faroq"))

// ------- /


// function reverString(input) {
//     for (let i = input.length - 1; i >= 0; i--)
//         console.log(input[i]);
// }
// reverString("SoftwareDevelopment");
