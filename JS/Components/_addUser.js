export const project = document.getElementById("project");

export function addAttendeeFormToCard(eventData, project) {
  const addAttendeeForm = document.createElement("form");
  const attendeeNameInput = document.createElement("input");
  const submitAttendeeButton = document.createElement("button");

  attendeeNameInput.placeholder = "Enter your name";
  submitAttendeeButton.textContent = "Add Attendee";

  eventData.dates.forEach((date) => {
    const dateValue = date.date;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = dateValue;
    checkbox.name = "dateAvailability";
    checkbox.checked = false; // <- This is the default value //

    addAttendeeForm.appendChild(checkbox);
  });
  addAttendeeForm.appendChild(attendeeNameInput);
  addAttendeeForm.appendChild(submitAttendeeButton);
  project.appendChild(addAttendeeForm);

  // RETRIEVE INPUT DATA WITH SUBMIT
  addAttendeeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = attendeeNameInput.value;
    const availability = [];

    eventData.dates.forEach((date) => {
      const dateValue = date.date;
      const checkbox = addAttendeeForm.querySelector(`#${dateValue}`);
      availability.push({
        date: dateValue,
        available: checkbox.checked,
      });
    });
    let userAvailability = {
      name,
      dates: availability,
    };
    postUserAvailability(userAvailability, eventData.id);
  });
}

// POST THE INPUT TO THE JSON //
let postUserAvailability = () => {
  fetch("http://localhost:3000/api/events/${eventID}/attend", {
    method: "POST",
    body: JSON.stringify(userAvailability, eventID),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
