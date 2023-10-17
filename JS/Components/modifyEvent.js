export async function modifyEvent(event) {
  const eventID = event.target.getAttribute("data-event-id");

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
        <button type="submit" id="submit-form">Submit</button>
        <button type="button" id="cancel-button">Cancel</button>
      `;
      document.body.appendChild(form);

      // get form inputs
      const nameInput = form.querySelector("#name");
      const authorInput = form.querySelector("#author");
      const descriptionInput = form.querySelector("#description");

      // create formData object
      const formData = {
        name: nameInput.value,
        author: authorInput.value,
        description: descriptionInput.value
      };

      // handle form submission
      form.addEventListener("submit", event => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/events/${eventID}`, {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            if (response.ok) {
              form.remove();
            } else {
              throw new Error("Failed to update event");
            }
          })
          .catch(error => console.error(error));
      });

      // handle cancel button click
      const cancelButton = document.getElementById("cancel-button");
      cancelButton.addEventListener("click", () => {
        form.remove();
      });
    })
    .catch(error => console.error(error));
}