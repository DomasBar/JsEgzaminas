/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator (a, b) {
    this.a = a;
    this.b = b;

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
let suma  = new Calculator(1, 1)
console.log(suma.sum())

const sub = new Calculator(6, 1)
console.log(sub.subs())

const multiply = new Calculator(5, 3)
console.log(multiply.multi())

const divis = new Calculator(20, 2)
console.log(divis.division())



