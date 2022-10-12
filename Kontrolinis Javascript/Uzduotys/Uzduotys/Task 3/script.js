/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
let list = {};

function createTable() {
    //susikuriu kintamuosiu, pagal kuriuos bus atvaizdauojama
    const login = document.createElement('th');
    login.innerText = 'LOGIN';

    const image = document.createElement('th');
    image.innerText = 'Avatar_url';

    //sukuriu lenteles eilute, i ja pridedu logina ir image
    const tr = document.createElement('tr');
    tr.append(login, image);

    const thead = document.createElement('thead');
    thead.append(tr);

    const table = document.createElement('table');
    table.append(thead, document.createElement('tbody'));
    let divOutput = document.getElementById('output') //gal vieto const reikia let?
    divOutput.appendChild(table);
    // document.body.append(table); //ar reikia?
}

function loadedData2(robots) {
    try{
        const userBody = document.getElementById('output');
        robots.forEach(robot =>{
            const container = document.createElement('div');
            const login2 = document.createElement('div');
            login2.innerText = robot.login;
            const image2 = document.createElement('img');
            image2.src = robot.avatar_url;
            const imageContainer = document.createElement('div');
            imageContainer.append(image2);
            login2.classList = 'login-container';
            imageContainer.classList = 'image-container';
            container.classList = 'container';
            container.append(login2);
            container.append(imageContainer);
            userBody.append(container);
        });
    }catch(err){
        console.error(err);
    }
}

// sukuriu funkcija, kuri uzkraus vartotojus
function loadedData(robots) {
    const tbody = document.querySelector('tbody');
    tbody.innerText = ' ';

    robots.forEach(robot => {
        const id = document.createElement('td');
        id.innerText = robot.login;
    
        const img = document.createElement('img');
        img.src = robot.avatar_url;

        img.setAttribute('alt', 'UserPicture');
        const image = document.createElement('td');
        image.append(img);
        
        const tr = document.createElement('tr')
        tr.append(id, image);
        tbody.append(tr);
      });
}
fetch(ENDPOINT)
    .then(result => result.json())
    .then((output) => {
        list = output;
    }).catch(err => console.log(err));

    const element = document.getElementById('btn');
    element.addEventListener('click', printAll);

    function printAll() {
        document.getElementById('message').style.visibility='hidden';
        loadedData2(list);
    }