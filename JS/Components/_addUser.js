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

  const userAvailability = {
    name: attendeeNameInput.value,
    availability: checkbox.value,
  };
}

// POST THE INPUT TO THE JSON //
let postUserAvailability = () => {
  fetch("http://localhost:3000/api/events/", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
