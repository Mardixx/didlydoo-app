export async function modifyAttendee(event) {
  const eventID = event.target.getAttribute("data-event-id");
  
  // fetch event data
  fetch(`http://localhost:3000/api/events/${eventID}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createForm(data, eventID);
    })
    .catch((error) => console.error(error));
}