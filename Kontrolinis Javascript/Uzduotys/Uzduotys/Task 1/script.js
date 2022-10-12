/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const element = document.getElementById('submit-btn');
element.addEventListener('click',getWeight); //spaudant mygtuka, veiks funkcija

function getWeight() {
    event.preventDefault(); //reikia, kad nepersikrautu puslapis, nes atvaizduotas rezultatas dingsta persikroves
    const enteredKilograms = document.getElementById('search').value; // sukurtas kintamasis, kur pasiimam jo verte
    console.log(enteredKilograms);
    document.getElementById('table').style.visibility='visible';//pateikus forma rodomas rezultatas

    document.getElementById('svarai-value').innerText=enteredKilograms*2.2046;
    document.getElementById('gramai-value').innerText=enteredKilograms/0.0010000;
    document.getElementById('uncijos-value').innerText=enteredKilograms*35.274;
}