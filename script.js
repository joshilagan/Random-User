const div = document.querySelector('#user')
const body = document.querySelector('body')

function genUser() {
    showSpinner();
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
        hideSpinner();
        shortenPath(data.results[0])
    });

    function shortenPath(item){
        if (item.gender !== 'male'){
            body.style.backgroundColor = 'rgb(147 51 234)'
            // console.log('female');
        } else {
            // console.log('male');
           body.style.backgroundColor = 'rgb(29 78 216)' 
        }
        div.innerHTML = `      
        <div class="flex justify-between">
        <div class="flex">
          <img src="${item.picture.large}" alt="" class="w-48 h-48 rounded-full mr-8">
          <div class="space-y-3">
            <p class="text-xl">
              <span class="font-bold">Name </span> ${item.name.first} ${item.name.last}
            </p>              
            <p class="text-xl">
              <span class="font-bold">Email: </span> ${item.email}
            </p>
            <p class="text-xl">
              <span class="font-bold">Phone: </span> ${item.phone}
            </p>
            <p class="text-xl">
              <span class="font-bold">Location: </span> ${item.location.city} ${item.location.country}
            </p>
            <p class="text-xl"><span class="font-bold">Age: </span> ${item.dob.age} </p> 
          </div>
          </div>
        </div>`
    }
   
}
function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
  }
  
  function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
  }

document.querySelector('#generate').addEventListener('click', genUser)
window.addEventListener('DOMContentLoaded', genUser)

