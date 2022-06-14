// function square() {
//     let num = 9
//     let sq = num * (num + 1)
//     console.log(sq)
// }
// square()
// -------------------------------

// function add() {
//     let num1 = 10
//     let num2 = 20
//     let sum = num1 + num2

//     console.log(sum)
// }

// add()
// -------------------------------

// const pi = 3.14

// function volumeofcone(r, h) {
//     let volume = pi * (r * r) * h / 3;
//     return volume
// }

// console.log(volumeofcone(3, 9))
// -------------------------------

// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// //calling a function
// console.log(sumArrayValues(numbers))
// -------------------------------


// Function expression
// const square = function(n) {
//     return n * n
// }

// console.log(square(2)) // -> 4
// -------------------------------

// function weightOfObject(mass, gravity = 9.81) {
//     let weight = mass * gravity + ' N' // the value has to be changed to string first
//     return weight
// }

// console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
// console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
// -------------------------------

// function calculateAge(birthYear, currentYear = 2022) {
//     let age = currentYear - birthYear
//     return age
// }
// console.log('Age: ', calculateAge(2002))
// -------------------------------