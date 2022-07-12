/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const btn = document.getElementById('submit-btn');
const output = document.getElementById('output');

let form = document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

   let input =  document.getElementById("search").value;
   let Lb = input * 2.2046;
   let G = input * 0.001;
   let Oz = input * 35.274;

   function getWeight(){
      let output = document.getElementById('output')

      output.style.margin = '0 auto';
      output.style.textAlign = 'center';
      output.style.border = 'black solid 3px';
      output.style.backgroundColor = 'white';
      output.style.width = '80%'
      
      output.innerHTML=`
      Kg į svarus: ${Lb} Lb.<br>
      Kg į gramus: ${G} G.<br>
      Kg į uncijas: ${Oz} Oz.`

      
   }
   getWeight();
})

