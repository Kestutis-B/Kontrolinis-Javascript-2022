/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
let list = {};
function loadedData (robots) {
    const cars = document.getElementById('output');
    for (let i = 0; i < robots.length; i++) {
        const container = document.createElement('div');
        const login2 = document.createElement('div');
        login2.innerText = robots[i].brand;
        login2.classList = 'brand-container';
        container.classList = 'car-container';
        const model = document.createElement('div');
        model.innerText = robots[i].models;
        model.classList = 'model-container';
        container.append(login2);
        container.append(model);
        cars.append(container);
    }
}
fetch(ENDPOINT)
.then (result => result.json())
.then((output) => {
    list = output;
    loadedData(list);
}).catch(err => console.error(err));