export async function modifyEvent(event) {
  const eventID = event.target.getAttribute("data-event-id");
//   const confirmation = confirm(
//     "Warning, this event will be deleted. Are u sure ?"
//   );
//   if (confirmation) {
//     fetch(`http://localhost:3000/api/events/${eventID}`, {
//       method: "DELETE",
//     })
//       .then((reponse) => {
//         if (reponse.status === 200) {
//           console.log("Delete successfull");
//           event.target.parentElement.remove();
//         } else {
//           console.error("Deletion failed");
//         }
//       })
//       .catch((error) => {
//         console.error("An error occurred:", error);
//       });
//   }
// }

// PATCH	/api/events/[id]/	{ name: string (optional), author: string (optional), description: string (optional) }	
// Patches (edit) an event with the provided infos

// console.log(eventID);GET	/api/events/[id]		A single event

// fetch event data
fetch(`http://localhost:3000/api/events/${eventID}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    const form = document.createElement("form");
    form.innerHTML = `
    <label for="name">Name</label>
    <input type="text" id="name" name="name" value="${data.name}">
    <label for="author">Author</label>
    <input type="text" id="author" name="author" value="${data.author}">
    <label for="description">Description</label>
    <textarea id="description" name="description">${data.description}</textarea>
    <button type="submit">Submit</button>
    `;
    document.body.appendChild(form);
  })
  .catch(error => console.error(error));
    
}

