export async function addEvents() {

// get the dates from the form and add them to an array
// the date is converted to a string and then pushed to the array
// the array is then displayed in the dom as a list
// the array is then sent to the database as a string
const dateInput = document.getElementById('date');
const dateNewButton = document.getElementById('dateNew-button');
let datesArray = [];

dateNewButton.addEventListener('click', (event) => {
event.preventDefault();
const newDate = dateInput.value;
const dateString= newDate.toString();
datesArray.push(dateString);
const datesList = document.getElementById('dates-list');
const dateItem = document.createElement('li');
const dateDeleteButton = document.createElement('button');
dateItem.textContent = dateString;
datesList.appendChild(dateItem);
dateItem.appendChild(dateDeleteButton);
dateDeleteButton.setAttribute('id', 'dateDeleteButton');
});





console.log(datesArray);



const nameInput = document.getElementById('name');
const authorInput = document.getElementById('author');
const descriptionInput = document.getElementById('description');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', (event) => {
event.preventDefault();
const eventData = {
    name: nameInput.value,
    dates: datesArray,
    author: authorInput.value,
    description: descriptionInput.value
};

fetch('http://localhost:3000/api/events/', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
console.log(eventData);
});
}