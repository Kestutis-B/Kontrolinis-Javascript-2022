/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

function getUserAverageAge(array) {
  let sum = 0;
  //ciklas suaksi, paima visus usreiu metus ir sudeda
  for (let index = 0; index < array.length; index++) {
    sum += array[index].age;
  }
  //grazina vidurki
  return sum/array.length;
}

function getUsersNames(array) {
  let usersArray = [];
  //ciklas sukasi ir i nauja array sudeda tik vardus pavardes
  for (let index = 0; index < array.length; index++) {
    if (array[index].name) {
      usersArray[index] = array[index].name;
    }
  }
  return usersArray;
}

console.log(getUserAverageAge(users));
console.log(getUsersNames(users));
