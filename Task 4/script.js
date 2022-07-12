/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById('output');

let carModel = [];

function getCar() {

    fetch(ENDPOINT)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for(let i = 0; i < data.length; i++) {
                document.getElementById('output').innerHTML +=
                data[i].brand + " " + data[i].models;
            }

        
        }).then(function() {
            [].forEach(el => {

                let carCard = document.createElement('div');
                carCard.innerHTML = `${el.brand}`;



            })



        })
        .catch(function(err) {
            console.log(err)
        }) 

}
getCar();


// function getCar() {

//     fetch(ENDPOINT)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             for(let i = 0; i < data.length; i++) {
//                 document.getElementById('output').innerHTML +=
//                 data[i].brand + " " + data[i].models;
//             }
//         }) .catch(function(err) {
//             console.log(err)
//         }) 

// }
// getCar();







// fetch(myRequest)
//   .then(response => response.json())
//   .then(data => {
//     for (const product of data.products) {
//       let listItem = document.createElement('li');
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = product.Name;
//       listItem.append(
//         ` can be found in ${
//           product.Location
//         }. Cost: `
//       );
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = `£${product.Price}`;
//       myList.appendChild(listItem);
//     }
//   })
//   .catch(console.error);