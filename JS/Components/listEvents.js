export async function listEvents() {
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
}