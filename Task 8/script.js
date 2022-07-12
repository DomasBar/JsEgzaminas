/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator (a, b) {
    this.a = (a);
    this.b = (b);

    this.sum = function() {
        return this.a + this.b;
      };
    this.subs = function() {
        return this.a - this.b;
      };
    this.multi = function() {
        return this.a * this.b;
      };
    this.division = function() {
        return this.a / this.b;
      };
}
let suma  = new Calculator(1, 3)
console.log(suma.sum())

const sub = new Calculator(6,1)
console.log(sub.subs())

const multiply = new Calculator(5,3)
console.log(multiply.multi())

const divis = new Calculator(20, 2)
console.log(divis.division())







// class Calculator {

//     sum(a, b) {
//      return a + b;
//     }
//     subs(a, b) {
//         return a - b;
//     }
//     multi(a, b) {
//         return a * b;
//     }
//     divis(a, b) {
//         return a / b;
//     }
//    }

// const suma = new Calculator()
// console.log(suma.sum(1,3));

// const subst = new Calculator()
// console.log(subst.subs(5, 4))

// const multiple = new Calculator()
// console.log(multiple.multi(10, 2))

// const division = new Calculator()
// console.log(division.divis(10, 2))








// function sum() {
//     return a + b
// }
// // console.log(Calculator.sum(1,2))

// Calculator.prototype.sum = function() {
//     let a = Number(this.a);
//     let b = Number(this.b);
//     return (a + b);
// }
// Calculator.prototype.subs = function() {
//     let a = Number(this.a);
//     let b = Number(this.b);
//     return (a - b);
// }
// Calculator.prototype.multi = function() {
//     let a = Number(this.a);
//     let b = Number(this.b);
//     return (a * b);
// }
// Calculator.prototype.division = function() {
//     let a = Number(this.a);
//     let b = Number(this.b);
//     return (a / b);
// }

// console.log(Calculator.prototype.sum(10,15));



