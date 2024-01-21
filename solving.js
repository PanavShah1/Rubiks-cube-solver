import { myVariable } from './temp2.js';
console.log(myVariable);
console.log('hello');

const apiUrl = 'http://127.0.0.1:8000/cube-scramble/' + myVariable;

let soln = '';
let text_array = ''




fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Move console.log(data); here
        return response.json();
    })
    .then(data => {
        soln = data['message'];
        console.log('soln : '+soln); // Log the received data
        // console.log('API Response:', data['message']);
        const paraElement = document.createElement('p');
        paraElement.textContent = soln;
        document.querySelector('.moves').appendChild(paraElement);


        text_array = soln.split(' ');
        console.log(text_array);
     

    })
    .catch(error => {
        console.error('Error:', error.message);
    });






