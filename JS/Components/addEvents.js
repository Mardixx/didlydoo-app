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
// the delete button is created and appended to the dateItem
// the delete button is given an id and text content
// the event listener removes the dateItem from the dom
// the event listener removes the date from the array
dateDeleteButton.setAttribute('id', 'dateDeleteButton');
dateDeleteButton.textContent = 'Delete';
dateDeleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    dateItem.remove();
    const index = datesArray.indexOf(dateString);
    if (index > -1) {
        datesArray.splice(index, 1);
    }
    console.log(datesArray);
});
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
    // the datesArray is in string format not date format
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