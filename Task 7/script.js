/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

// 1 Sprendimas

function showObjectKeys() {
  let keys = Object.keys(audi);
  console.log(keys)
}
showObjectKeys();

// 2 sprendimas

// const showObjectKeys = (key) => Object.keys(key);
// console.log(showObjectKeys(audi));


