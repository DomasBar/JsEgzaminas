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

const btn = document.getElementById('btn');
const output = document.getElementById('output');
const message = document.getElementById('message')

btn.addEventListener('click', getUsers);

function getUsers() {

    fetch(ENDPOINT).then (function(res){
        return res.json()

    }).then(function (data){
        // console.log(data)
        data.forEach(el=>{

            let divas = document.createElement('div');
            divas.textContent = `${el.login}`;

            divas.style.border = 'black solid 2px';
            divas.style.marginTop = '1rem';

            let image = document.createElement('img');
            divas.appendChild(image);

            image.setAttribute('src', el.avatar_url);
            image.style.display = 'block';

            output.appendChild(divas);

            message.style.display = 'none';
        })

    })

};

