/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const element = document.getElementById('btn__element'); //pasiimam mygtuko elementa
//sukuriu eventlisteneri, kai paspaudi mygtuka, steitas prideda po viena skaiciu kaskart
element.addEventListener('click', a => document.getElementById('btn__state')
.innerText = ++document.getElementById('btn__state').innerText);