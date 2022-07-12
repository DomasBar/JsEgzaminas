/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */


// TIK PER LIVE SERVER

const ENDPOINT = 'cars.json';
const output = document.getElementById('output');

let carModel = [];


function getCar() {
    fetch(ENDPOINT).then (function(res){
        return res.json()

    }).then(function (data){
        data.forEach(el=>{

            let brand = document.createElement('div');
            brand.innerHTML = `${el.brand}`

            brand.style.border = "1px black solid"
            brand.style.margin = "1rem"
            brand.style.background = 'lightyellow'
            brand.style.textAlign = 'center'

            output.append(brand);

            let model = document.createElement('div');
            model.innerHTML = `${el.models}`

            model.style.marginLeft = '1rem'
            model.style.textAlign = 'center'
            model.style.wordSpacing = '10px'
            

            output.append(model);
        })
    })
}
getCar();