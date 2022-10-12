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

//sukuriu funkcija, kuri paima objekto keys
function showObjectKeys(object) {
  return Object.keys(object);
}
//atprintinu funkcija, kuri paima konkretaus objekto keys
console.log(showObjectKeys(audi));