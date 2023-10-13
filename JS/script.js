fetch('http://localhost:3000/api/events/')
    .then(response => response.json())
    .then(data => {
        const eventsList = document.getElementById('events-list');
        data.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.textContent = event.name;
            eventsList.appendChild(eventItem);
        });
    })

//     export async function getData() {
//         fetch("http://localhost:3000/api/events/")
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => console.error(error));
//       }
      
//       getData();


    //   POST	/api/events/	
    //   { name: string, dates: array of dates ['YYYY-MM-DD'], author: string, description: string }
    //   	Creates an event with dates as possibilities.
    //      You must provide an author, a name and a description for the event



    // Create a array of dates from the input field and push them to the dates array
    // the dates array is alose displayed in the DOM

    const dateInput = document.getElementById('date');
    const dateNewButton = document.getElementById('dateNew-button');
    let datesArray = [];

dateNewButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newDate = dateInput.value;
    datesArray.push(newDate);
    const datesList = document.getElementById('dates-list');
    const dateItem = document.createElement('li');
    dateItem.textContent = newDate;
    datesList.appendChild(dateItem);
});

console.log(datesArray);

// must create a button to delete a date in the dom and modify the dates array

    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const descriptionInput = document.getElementById('description');
    const datesInput = document.getElementById('date');
    const addButton = document.getElementById('add-button');
    
    addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const eventData = {
        name: nameInput.value,
        dates: ['2023-12-12'],
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

